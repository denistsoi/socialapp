import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  user: {
    name: string;
    username: string;
  };
  onPress: () => void;
};

const style = StyleSheet.create({
  userItem: {
    paddingTop: 40,
    paddingBottom: 40,
    borderBottomColor: "red",
    borderBottomWidth: 1
    // backgroundColor:
  }
});

const UserItem = ({ user, onPress }: Props): ReactElement => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style.userItem}>
        <Text>
          {user.name}: @{user.username}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
