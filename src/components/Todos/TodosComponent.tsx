import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Todo } from "../../types/resource";

import styles from "./styles";

const Todos = ({ todos }: { todos: Array<Todo> }): ReactElement => {
  return (
    <View>
      {todos?.map((todo, index) => (
        <View key={index} style={styles.todo}>
          <Icon
            size={20}
            style={styles.iconColor}
            name={
              todo.completed ? "check-box" : "check-box-outline-blank"
            }></Icon>
          <Text style={styles.todoText} numberOfLines={1}>
            {todo.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Todos;
