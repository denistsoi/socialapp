import React, { ReactElement, useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { UserListNavigationProp } from "../types/navigation";

import styles from "./sharedStyles";

import { User } from "../types/resource";
import { getUsers } from "../api/apiClient";
import UserItem from "../components/UserItem";

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
      {!users ? (
        <ActivityIndicator />
      ) : (
        <View>
          {!users
            ? null
            : users.map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  onPress={(): void =>
                    navigation.navigate("UserDetails", { id: user.id })
                  }></UserItem>
              ))}
        </View>
      )}
    </View>
  );
};

export default UsersList;
