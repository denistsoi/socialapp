import React, { ReactElement, useState, useEffect } from "react";
import { UserListNavigationProp } from "../types/navigation";

import UserList from "../components/UserList";

/**
 * hooks
 */
import { User } from "../types/resource";
import { getUsers } from "../api/apiClient";

const useUsersListHook = (): Array<User> | null => {
  const [users, setUsers] = useState<Array<User> | null>(null);

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
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
    <UserList
      navigationfn={(id: string): void => {
        navigation.navigate("UserDetails", { id });
      }}
      users={users}
    />
  );
};

export default UserListView;
