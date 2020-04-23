import React, { ReactElement, useState, useEffect } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { UserListNavigationProp } from "../types/navigation";

import styles from "./sharedStyles";

import { User } from "../types/resource";
import { getUsers } from "../api/apiClient";

type Props = {
  navigation: UserListNavigationProp;
};

const useUsersListHook = (): Array<User> | null => {
  const [users, setUsers] = useState<Array<User> | null>(null);

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return users;
};

const UsersList = ({ navigation }: Props): ReactElement => {
  const users = useUsersListHook();

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {!users ? (
        <ActivityIndicator />
      ) : (
        <View>
          {!users
            ? null
            : users.map((user) => (
                <View key={user.id}>
                  <Text>{user.name}</Text>
                </View>
              ))}
        </View>
      )}

      <Button
        title="Go to Details"
        onPress={(): void => navigation.navigate("UserDetails")}
      />
    </View>
  );
};

export default UsersList;
