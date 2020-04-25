import React, { ReactElement } from "react";
import { View, Text } from "react-native";

import Address from "../Address/UserAddressComponent";

import { UserDetails } from "../../types/resource";
import { UserDetailsNavigationProp } from "./../../types/navigation";

type Props = {
  navigation: UserDetailsNavigationProp;
  user: UserDetails;
};

const UserDetailsComponent = ({ navigation, user }: Props): ReactElement => {
  return (
    <View>
      <Text>{JSON.stringify(user, null, 2)}</Text>

      <Address
        address={user.address}
        onPress={(): void => {
          navigation.navigate("UserAddress", { address: user?.address });
        }}
      />

      {/* <Albums /> */}
      {/* <Todos /> */}
      {/* <Posts /> */}
    </View>
  );
};

export default UserDetailsComponent;
