import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {
  name: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App: React.FC<Props> = () => (
  <View style={styles.container}>
    <Text>Open</Text>
  </View>
);

export default App;
