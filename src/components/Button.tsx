import React, { ReactElement, ReactChildren } from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: ReactChildren;
}

export const Button = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
