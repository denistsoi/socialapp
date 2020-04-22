import React, { ReactElement } from "react";
import { Button, Text, View } from "react-native";

import { UserDetailsNavigationProp } from "../types/navigation";

import styles from "./sharedStyles";

type Props = {
  navigation: UserDetailsNavigationProp;
};

const UserDetails = ({ navigation }: Props): ReactElement => (
  <View style={styles.container}>
    <Text>Hello User</Text>
    <Button
      title="Go to Details"
      onPress={(): void => navigation.navigate("UsersList")}
    />
  </View>
);

export default UserDetails;
