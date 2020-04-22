// import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  UsersList: undefined;
  UserDetails: { name: undefined };
};

/**
 * UserList
 */
export type UserListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UsersList"
>;

// export type UserListRouteProp = RouteProp<RootStackParamList, "UserList">;

export type UserDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UsersList"
>;
