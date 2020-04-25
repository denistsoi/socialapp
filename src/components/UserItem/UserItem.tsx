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

const style = StyleSheet.create({
  userItem: {
    paddingTop: 40,
    paddingBottom: 40,
    borderBottomColor: "#444",
    borderBottomWidth: 1,
    fontSize: 16,
    alignItems: "center"
  },
  header: {
    flex: 1,
    width: "80%",
    alignContent: "stretch",
    flexDirection: "row",
    alignItems: "baseline"
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
      <TouchableOpacity onPress={onPress} style={style.userItem}>
        <View style={style.header}>
          <Text>{user.name}</Text>
          <Text style={style.subtitle}>@{user.username}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
