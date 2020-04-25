import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type UserDetails = {
  id: string;
};

export type RootStackParamList = {
  UsersList: undefined;
  UserDetails: UserDetails | { id: string };
  UserAddress: { address: object };
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

export type UserAddressNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserAddress"
>;

export type UserListRouteProp = RouteProp<RootStackParamList, "UsersList">;
export type UserDetailsRouteProp = RouteProp<RootStackParamList, "UserDetails">;
export type UserAddressRouteProp = RouteProp<RootStackParamList, "UserAddress">;
