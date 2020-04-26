import React, { ReactElement, useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import Address from "../Address/UserAddressComponent";
import Albums from "../Albums/AlbumsComponent";

import { UserDetails, Album, Post, Todo } from "../../types/resource";
import { UserDetailsNavigationProp } from "./../../types/navigation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { getAlbums, getPosts, getTodos } from "../../api/apiClient";

type Props = {
  navigation: UserDetailsNavigationProp;
  user: UserDetails;
};

const styles = StyleSheet.create({
  marginTop: { marginTop: 10 },
  scroll: { width: "100%", flex: 1 }
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
          <TouchableOpacity onPress={(): void => onPress(post.id)}>
            <Text>{JSON.stringify(post)}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const Todos = ({
  todos,
  onPress
}: {
  todos: Array<Todo>;
  onPress: Function;
}): ReactElement => {
  return (
    <View>
      {todos?.map((todo, index) => (
        <View key={index}>
          <TouchableOpacity onPress={(): void => onPress(todo.id)}>
            <Text>{JSON.stringify(todo)}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

/**
 * hooks
 */
const useUserAlbumsHook = (userId: string): Array<Album> | null => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    getAlbums({ userId: parseInt(userId) }).then((response) =>
      setAlbums(response)
    );
  }, []);

  return albums;
};

const useUserPostsHook = (userId: string): Array<Post> | null => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    getPosts({ userId: parseInt(userId) }).then((response) =>
      setPosts(response)
    );
  }, []);

  return posts;
};

const useUserTodosHook = (userId: string): Array<Todo> | null => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    getTodos({ userId: parseInt(userId) }).then((response) =>
      setTodos(response)
    );
  }, []);

  return todos;
};

const UserDetailsComponent = ({ navigation, user }: Props): ReactElement => {
  const albums = useUserAlbumsHook(user.id);
  const posts = useUserPostsHook(user.id);
  const todos = useUserTodosHook(user.id);
  return (
    <ScrollView style={styles.scroll}>
      <View>
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

          {!albums ? (
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

          {!posts ? (
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

          {!todos ? (
            <ActivityIndicator />
          ) : (
            <Todos
              todos={todos}
              onPress={(todoId: string): void => {
                navigation.navigate("UserTodo", { todoId });
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailsComponent;
