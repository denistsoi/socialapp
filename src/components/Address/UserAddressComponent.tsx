import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Address } from "../../types/resource";

type Props = {
  address: Address;
  onPress: any;
};

const UserAddressComponent = ({ address, onPress }: Props): ReactElement => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{JSON.stringify(address, null, 1)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserAddressComponent;
