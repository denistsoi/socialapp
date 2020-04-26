import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserDetailsView from "./containers/UserDetailsView";
import UserListView from "./containers/UserListView";
import UserAddressView from "./containers/UserAddressView";
import UserAlbumView from "./containers/UserAlbumView";

import { RootStackParamList } from "./types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListView}></Stack.Screen>
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsView}></Stack.Screen>

        <Stack.Screen
          name="UserAddress"
          component={UserAddressView}></Stack.Screen>

        <Stack.Screen name="UserAlbum" component={UserAlbumView}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import storybook from "../storybook";
// const env = process.env.NODE_ENV == "storybook" ? storybook : App;
//
// export default env;
