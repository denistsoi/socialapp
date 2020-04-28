import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import styles from "./sharedStyles";

import { UserPostRouteProp } from "../types/navigation";
import { getComments } from "../api/apiClient";
import { Comment } from "../types/resource";

type Props = {
  route: UserPostRouteProp;
};

const useCommentHook = (
  postId: number
): { comments: Array<Comment>; isLoading: boolean } => {
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getComments({ postId, _limit: 18 })
      .then((response) => {
        setComments(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // handle error
      });
  }, []);

  return { comments, isLoading };
};

const CommentComponent = (props: {
  name: string;
  email: string;
  body: string;
}): ReactElement => (
  <View style={styles.comment}>
    <Text style={styles.commentName}>{props.name}</Text>
    <Text style={styles.commentEmail}>{props.email}</Text>
    <Text style={styles.commentBody}>{props.body}</Text>
  </View>
);

const UserPostView = ({ route }: Props): ReactElement => {
  const { post } = route?.params;
  const { comments, isLoading } = useCommentHook(Number(post.id));
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.postContainer}>
          <View style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
          <View style={styles.commentContainer}>
            <FlatList
              style={styles.commentList}
              data={comments}
              keyExtractor={(_, index): string => index.toString()}
              renderItem={({ item }): ReactElement => (
                <CommentComponent {...item} />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default UserPostView;
