import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserAlbumRouteProp } from "../types/navigation";

type Props = {
  route: UserAlbumRouteProp;
};

const UserAlbumView = ({ route }: Props): ReactElement => {
  console.log("route", route);
  const { albumId } = route?.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(albumId)}</Text>
    </View>
  );
};

export default UserAlbumView;
