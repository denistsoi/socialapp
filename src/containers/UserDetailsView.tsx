import React, { ReactElement, useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import UserDetailsComponent from "../components/UserDetails/UserDetailsComponent";

import {
  UserDetailsNavigationProp,
  UserDetailsRouteProp
} from "../types/navigation";

import styles from "./sharedStyles";

/**
 * hooks
 */
import { UserDetails, Album, Todo, Post } from "../types/resource";
import {
  getUserDetails,
  getAlbums,
  getPosts,
  getTodos
} from "../api/apiClient";

const useUserDetailsHook = (id?: string): UserDetails | null => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    getUserDetails(id).then((response) => setUser(response));

    return (): void => {
      // cleanup
      setUser(null);
    };
  }, []);

  return user;
};

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

/**
 * component
 */
type Props = {
  navigation: UserDetailsNavigationProp;
  route: UserDetailsRouteProp;
};

const UserDetailsView = ({ navigation, route }: Props): ReactElement => {
  const user = useUserDetailsHook(route.params.id);
  const albums = useUserAlbumsHook(route.params.id);
  const posts = useUserPostsHook(route.params.id);
  const todos = useUserTodosHook(route.params.id);

  return (
    <View style={styles.container}>
      {!user ? (
        <ActivityIndicator />
      ) : (
        <UserDetailsComponent
          navigation={navigation}
          user={user}
          albums={albums}
          posts={posts}
          todos={todos}
        />
      )}
    </View>
  );
};

export default UserDetailsView;
