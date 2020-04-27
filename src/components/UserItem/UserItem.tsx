import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  user: {
    id: string;
    name: string;
    username: string;
  };
  onPress: () => void;
};

const styles = StyleSheet.create({
  userItem: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ababab",
    borderBottomWidth: 0.5,
    fontSize: 16,
    alignItems: "center"
  },
  header: {
    flex: 1,
    width: "100%",
    alignContent: "stretch",
    flexDirection: "row",
    alignItems: "baseline"
  },
  title: {
    fontSize: 16
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 10,
    color: "#666"
  }
});

const UserItem = ({ user, onPress }: Props): ReactElement => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.userItem}>
        <View style={styles.header}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.subtitle}>@{user.username}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
