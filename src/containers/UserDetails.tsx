import React, { ReactElement, useState, useEffect } from "react";
import { Button, Text, View, ActivityIndicator } from "react-native";

import {
  UserDetailsNavigationProp,
  UserDetailsRouteProp
} from "../types/navigation";

import styles from "./sharedStyles";

type Props = {
  navigation: UserDetailsNavigationProp;
  route?: UserDetailsRouteProp;
};

import { UserDetails } from "../types/resource";

import { getUserDetails } from "../api/apiClient";

const useUserDetailsHook = (id?: number): UserDetails | null => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    getUserDetails(id).then((response) => setUser(response));
  }, []);

  return user;
};

const UserDetailsView = ({ navigation, route }: Props): ReactElement => {
  const id = route?.params?.id;
  const user = useUserDetailsHook(id);

  return (
    <View style={styles.container}>
      {!user ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{JSON.stringify(user, null, 2)}</Text>
          <Button
            title="Go to UserList"
            onPress={(): void => navigation.navigate("UsersList")}
          />
        </View>
      )}
    </View>
  );
};

export default UserDetailsView;
