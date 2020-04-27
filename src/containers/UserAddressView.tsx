import React, { ReactElement } from "react";
import { View } from "react-native";

import AddressDetails from "../components/Address/AddressDetails";

import { UserAddressRouteProp } from "../types/navigation";
import styles from "./sharedStyles";

type Props = {
  route: UserAddressRouteProp;
};

const UserAddressView = ({ route }: Props): ReactElement => {
  const { address } = route.params;

  return (
    <View style={styles.container}>
      <AddressDetails {...address} />
    </View>
  );
};

export default UserAddressView;
