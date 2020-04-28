import React, { ReactElement, useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { UserListNavigationProp } from "../types/navigation";

import UserList from "../components/UserList/UserListComponent";

/**
 * hooks
 */
import { User } from "../types/resource";
import { getUsers } from "../api/apiClient";
import styles from "./sharedStyles";

const useUsersListHook = (): Array<User> | null => {
  const [users, setUsers] = useState<Array<User> | null>(null);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response))
      .catch((err) => {
        console.error(err);
        // handle error
      });
  }, []);

  return users;
};

/**
 * component
 */

type Props = {
  navigation: UserListNavigationProp;
  users: Array<object>;
};

const UserListView = ({ navigation }: Props): ReactElement => {
  const users = useUsersListHook();

  return (
    <SafeAreaView style={styles.safeView}>
      <UserList
        navigationfn={(id: string): void => {
          navigation.navigate("UserDetails", { id });
        }}
        users={users}
      />
    </SafeAreaView>
  );
};

export default UserListView;
