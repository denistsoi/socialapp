import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Address } from "../../types/resource";

type Props = {
  address: Address;
  onPress: any;
};

const styles = StyleSheet.create({
  address: {
    fontSize: 10
  }
});

const UserAddressComponent = ({ address, onPress }: Props): ReactElement => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text style={styles.address}>
            {address.suite} {address.street}
          </Text>
          <Text style={styles.address}>
            {address.city} {address.zipcode}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserAddressComponent;
