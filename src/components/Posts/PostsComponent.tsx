import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Post } from "../../types/resource";

import styles from "./styles";

const Posts = ({
  posts,
  onPress
}: {
  posts: Array<Post>;
  onPress: Function;
}): ReactElement => {
  return (
    <View>
      {posts?.map((post, index) => (
        <View key={index} style={styles.postContainer}>
          <View style={styles.postContent}>
            <Text numberOfLines={1} style={styles.postTitle}>
              {post.title}
            </Text>
            <Text numberOfLines={2} style={styles.postBody}>
              {post.body}
            </Text>
          </View>
          <View style={styles.commentButton}>
            <TouchableOpacity onPress={(): void => onPress(post)}>
              <Text style={styles.comment}>Comments</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Posts;
