import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import Address from "../Address/UserAddressComponent";
import Albums from "../Albums/AlbumsComponent";

import { UserDetails, Post, Todo } from "../../types/resource";
import { UserDetailsNavigationProp } from "./../../types/navigation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  navigation: UserDetailsNavigationProp;
  user: UserDetails;
};

const styles = StyleSheet.create({
  marginTop: { marginTop: 10 },
  scroll: {
    height: "100%",
    width: "100%",
    padding: 20,
    flex: 1,
    backgroundColor: "#efefef"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    padding: 20
  },
  todo: {
    flex: 1,
    flexDirection: "row"
  },
  todoText: {
    width: "90%"
  },

  postContainer: {
    padding: 2,
    paddingBottom: 3,
    marginTop: 10,
    borderBottomColor: "#ababab",
    borderBottomWidth: 1
  },
  postTitle: {
    fontWeight: "bold"
  },
  postBody: {
    fontSize: 12
  },
  commentContainer: {
    alignSelf: "flex-end",

    padding: 4,
    backgroundColor: "#efefef"
  },
  comment: {
    fontSize: 8
  }
});

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
        <View key={index}>
          {/* Post */}
          <View style={styles.postContainer}>
            <Text numberOfLines={1} style={styles.postTitle}>
              {post.title}
            </Text>
            <Text numberOfLines={2} style={styles.postBody}>
              {post.body}
            </Text>
            <TouchableOpacity
              onPress={(): void => onPress(post.id)}
              style={styles.commentContainer}>
              <View>
                <Text style={styles.comment}>Comments</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const Todos = ({ todos }: { todos: Array<Todo> }): ReactElement => {
  return (
    <View>
      {todos?.map((todo, index) => (
        <View key={index} style={styles.todo}>
          <Icon
            size={20}
            name={
              todo.completed ? "check-box" : "check-box-outline-blank"
            }></Icon>
          <Text style={styles.todoText} numberOfLines={1}>
            {todo.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

/**
 * hooks
 */
import { useUserAlbumsHook, useUserPostsHook, useUserTodosHook } from "./hooks";

const UserDetailsComponent = ({ navigation, user }: Props): ReactElement => {
  const { albums, loadingAlbums } = useUserAlbumsHook(user.id);
  const { posts, loadingPosts } = useUserPostsHook(user.id);
  const { todos, loadingTodos } = useUserTodosHook(user.id);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (!loadingAlbums && !loadingTodos && !loadingPosts) setLoading(false);
  }, [loadingAlbums, loadingPosts, loadingTodos]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.marginTop}>
          <Address
            address={user.address}
            onPress={(): void => {
              navigation.navigate("UserAddress", { address: user?.address });
            }}
          />
        </View>

        <View style={styles.marginTop}>
          <Text>Albums</Text>

          {loadingAlbums ? (
            <ActivityIndicator />
          ) : (
            <Albums
              albums={albums}
              onPress={(albumId: string): void => {
                navigation.navigate("UserAlbum", { albumId });
              }}
            />
          )}
        </View>

        <View style={styles.marginTop}>
          <Text>Posts</Text>

          {loadingPosts ? (
            <ActivityIndicator />
          ) : (
            <Posts
              posts={posts}
              onPress={(postId: string): void => {
                navigation.navigate("UserPost", { postId });
              }}
            />
          )}
        </View>

        <View style={styles.marginTop}>
          <Text>Todos</Text>

          {loadingTodos ? <ActivityIndicator /> : <Todos todos={todos} />}
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailsComponent;
