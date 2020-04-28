import React, { ReactElement } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { UserDetails, Post } from "../../types/resource";
import { UserDetailsNavigationProp } from "./../../types/navigation";
import { ScrollView } from "react-native-gesture-handler";

import Address from "../Address/UserAddressComponent";
import Albums from "../Albums/AlbumsComponent";
import Posts from "../Posts/PostsComponent";
import Todos from "../Todos/TodosComponent";

import styles from "./styles";

type Props = {
  navigation: UserDetailsNavigationProp;
  user: UserDetails;
};

const UserName = (user: { name: string; username: string }): ReactElement => {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
    </View>
  );
};

const SectionHeader = ({ text }: { text: string }): ReactElement => (
  <Text style={styles.sectionHeader}>{text}</Text>
);

/**
 * hooks
 */
import { useUserAlbumsHook, useUserPostsHook, useUserTodosHook } from "./hooks";

const UserDetailsComponent = ({ navigation, user }: Props): ReactElement => {
  const { albums, loadingAlbums } = useUserAlbumsHook(user.id);
  const { posts, loadingPosts } = useUserPostsHook(user.id);
  const { todos, loadingTodos } = useUserTodosHook(user.id);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <UserName {...user} />

          <Address
            address={user.address}
            onPress={(): void => {
              navigation.navigate("UserAddress", { address: user?.address });
            }}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader text="Albums" />
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

        <View style={styles.section}>
          <SectionHeader text="Posts" />

          {loadingPosts ? (
            <ActivityIndicator />
          ) : (
            <Posts
              posts={posts}
              onPress={(post: Post): void => {
                navigation.navigate("UserPost", { post });
              }}
            />
          )}
        </View>

        <View style={styles.section}>
          <SectionHeader text="Todos" />
          {loadingTodos ? <ActivityIndicator /> : <Todos todos={todos} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetailsComponent;
