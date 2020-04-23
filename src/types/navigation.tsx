import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type UserDetails = {
  id: undefined;
};
export type RootStackParamList = {
  UsersList: undefined;
  UserDetails: UserDetails | {};
};

/**
 * UserList
 */
export type UserListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UsersList"
>;

export type UserDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserDetails"
>;

export type UserListRouteProp = RouteProp<RootStackParamList, "UsersList">;
export type UserDetailsRouteProp = RouteProp<RootStackParamList, "UserDetails">;
