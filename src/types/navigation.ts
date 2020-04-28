import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Post } from "./resource";

type UserDetails = {
  id: string;
};

export type RootStackParamList = {
  UserList: undefined;
  UserDetails: UserDetails | { id: string };
  UserAddress: {
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  };
  UserAlbum: { albumId: string };
  UserPost: { post: Post };
  UserTodo: { todoId: string };
};

/**
 * UserList
 */
export type UserListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserList"
>;

export type UserDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserDetails"
>;

export type UserAddressNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserAddress"
>;

export type UserListRouteProp = RouteProp<RootStackParamList, "UserList">;
export type UserDetailsRouteProp = RouteProp<RootStackParamList, "UserDetails">;
export type UserAddressRouteProp = RouteProp<RootStackParamList, "UserAddress">;

export type UserAlbumRouteProp = RouteProp<RootStackParamList, "UserAlbum">;
export type UserPostRouteProp = RouteProp<RootStackParamList, "UserPost">;
export type UserTodoRouteProp = RouteProp<RootStackParamList, "UserTodo">;
