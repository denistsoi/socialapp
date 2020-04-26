import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserPostsRouteProp } from "../types/navigation";

type Props = {
  route: UserPostsRouteProp;
};

const UserPostsView = ({ route }: Props): ReactElement => {
  const { posts } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(posts)}</Text>
    </View>
  );
};

export default UserPostsView;
