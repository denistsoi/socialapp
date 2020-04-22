import React, { ReactElement } from "react";
import { Button, Text, View } from "react-native";
import { UserListNavigationProp } from "../types/navigation";

import styles from "./sharedStyles";

type Props = {
  navigation: UserListNavigationProp;
};

const UsersList = ({ navigation }: Props): ReactElement => (
  <View style={styles.container}>
    <Text>Hello World</Text>
    <Button
      title="Go to Details"
      onPress={(): void => navigation.navigate("UserDetails")}
    />
  </View>
);

export default UsersList;
