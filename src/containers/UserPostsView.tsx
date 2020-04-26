import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserPostRouteProp } from "../types/navigation";

type Props = {
  route: UserPostRouteProp;
};

const UserPostsView = ({ route }: Props): ReactElement => {
  const { postId } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(postId)}</Text>
    </View>
  );
};

export default UserPostsView;
