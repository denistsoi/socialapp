import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserTodosRouteProp } from "../types/navigation";

type Props = {
  route: UserTodosRouteProp;
};

const UserTodosView = ({ route }: Props): ReactElement => {
  const { todos } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(todos)}</Text>
    </View>
  );
};

export default UserTodosView;
