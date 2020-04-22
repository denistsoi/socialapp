import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Text } from "react-native";
import { Button } from "../Button";

storiesOf("Button", module).add("default", () => (
  <Button onPress={action("tapped-default")}>
    <Text>Hello</Text>
  </Button>
));
