import React, { ReactElement } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import UserItem from "./UserItem";

import { User } from "../types/resource";

import styles from "./userListStyles";
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
        <View>
          <FlatList
            data={users}
            renderItem={({ item }): ReactElement => (
              <UserItem
                key={`${item.id}`}
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
