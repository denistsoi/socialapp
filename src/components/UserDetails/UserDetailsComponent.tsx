import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import Address from "../Address/UserAddressComponent";
import Albums from "../Albums/UserAlbumsComponent";

import { UserDetails, Album, Post, Todo } from "../../types/resource";
import { UserDetailsNavigationProp } from "./../../types/navigation";

type Props = {
  navigation: UserDetailsNavigationProp;
  user: UserDetails;
  albums: Array<Album> | null;
  posts: Array<Post> | null;
  todos: Array<Todo> | null;
};

const UserDetailsComponent = ({
  navigation,
  user,
  albums,
  posts,
  todos
}: Props): ReactElement => {
  return (
    <View>
      <Address
        address={user.address}
        onPress={(): void => {
          navigation.navigate("UserAddress", { address: user?.address });
        }}
      />

      <View>
        <Text>Albums</Text>
        <Albums
          albums={albums}
          onPress={(albumId: string): void => {
            navigation.navigate("UserAlbum", { album: albumId });
          }}
        />
      </View>

      <Text>{JSON.stringify(todos)}</Text>

      <Text>{JSON.stringify(posts)}</Text>
    </View>
  );
};

export default UserDetailsComponent;
