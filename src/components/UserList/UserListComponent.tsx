import React, { ReactElement } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import UserItem from "../UserItem/UserItem";

import { User } from "../../types/resource";

import styles from "./UserListStyles";
/**
 * component
 */

type Props = {
  navigationfn: Function;
  users: Array<User> | null;
};

const UserList = ({ navigationfn, users }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      {!users ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.userList}>
          <FlatList
            data={users}
            keyExtractor={(_, index): string => index.toString()}
            renderItem={({ item }): ReactElement => (
              <UserItem
                user={item}
                onPress={(): void => navigationfn(item.id)}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default UserList;
