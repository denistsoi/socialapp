import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  user: {
    name: string;
    username: string;
  };
  onPress: () => void;
};

const UserItem = ({ user, onPress }: Props): ReactElement => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>
          {user.name}: @{user.username}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
