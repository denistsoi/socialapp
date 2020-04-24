import React, { ReactElement, useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { UserListNavigationProp } from "../types/navigation";
import UserItem from "../components/UserItem";

import styles from "./sharedStyles";

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
};

const UsersList = ({ navigation }: Props): ReactElement => {
  const users = useUsersListHook();

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      {!users ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={users}
            renderItem={({ item }): ReactElement => (
              <UserItem
                key={`${item.id}`}
                user={item}
                onPress={(): void =>
                  navigation.navigate("UserDetails", { id: item.id })
                }
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default UsersList;
