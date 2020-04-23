import React, { ReactElement, ReactChildren, ReactChild } from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: ReactChildren | ReactChild;
}

export const Button = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
