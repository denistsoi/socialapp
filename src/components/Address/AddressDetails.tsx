import React, { ReactElement } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Address as AddressProps } from "../../types/resource";

const styles = StyleSheet.create({
  background: {
    padding: 20,
    backgroundColor: "#efefef",
    flex: 1
  },
  container: {
    backgroundColor: "#fff",
    minHeight: "80%"
  },
  content: {
    padding: 20
  },
  textStyle: {
    textAlign: "center",
    justifyContent: "center"
  }
});
const AddressDetails = ({
  suite,
  street,
  city,
  zipcode
}: AddressProps): ReactElement => (
  <View style={styles.background}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textStyle}>{suite}</Text>
        <Text style={styles.textStyle}>{street}</Text>
        <Text style={styles.textStyle}>{city}</Text>
        <Text style={styles.textStyle}>{zipcode}</Text>
      </View>

      {/* <View style={[styles.content, styles.map]}>
        <Text style={styles.textStyle}>Location</Text>
        <View></View>
      </View> */}
    </View>
  </View>
);

export default AddressDetails;
