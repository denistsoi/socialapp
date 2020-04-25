import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import styles from "./sharedStyles";

import { UserAddressRouteProp } from "../types/navigation";

type Props = {
  route: UserAddressRouteProp;
};

const UserAddressView = ({ route }: Props): ReactElement => {
  const { address } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(address)}</Text>
    </View>
  );
};

export default UserAddressView;
