import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserDetails from "./containers/UserDetails";
import UsersList from "./containers/UsersList";

import { RootStackParamList } from "./types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export interface Props {
  name: string;
}

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersList">
        <Stack.Screen name="UsersList" component={UsersList}></Stack.Screen>
        <Stack.Screen name="UserDetails" component={UserDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import storybook from "../storybook";

const env = process.env.NODE_ENV == "storybook" ? storybook : App;

export default env;
