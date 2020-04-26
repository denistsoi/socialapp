import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserAlbumRouteProp } from "../types/navigation";

type Props = {
  route: UserAlbumRouteProp;
};

const UserAlbumView = ({ route }: Props): ReactElement => {
  console.log("route", route);
  const { album } = route?.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(album)}</Text>
    </View>
  );
};

export default UserAlbumView;
