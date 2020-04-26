import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserTodoRouteProp } from "../types/navigation";

type Props = {
  route: UserTodoRouteProp;
};

const UserTodosView = ({ route }: Props): ReactElement => {
  const { todoId } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(todoId)}</Text>
    </View>
  );
};

export default UserTodosView;
