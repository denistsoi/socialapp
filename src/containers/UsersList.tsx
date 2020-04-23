import React, { ReactElement, useState, useEffect } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { UserListNavigationProp } from "../types/navigation";

import styles from "./sharedStyles";

type Props = {
  navigation: UserListNavigationProp;
};

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

const useUsersList = (): Array<User> | null => {
  const [users, setUsers] = useState<Array<User> | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
};

const UsersList = ({ navigation }: Props): ReactElement => {
  const users = useUsersList();

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
