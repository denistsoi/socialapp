import React, { ReactElement, useState, useEffect } from "react";
import { View, ActivityIndicator, SafeAreaView } from "react-native";

import UserDetailsComponent from "../components/UserDetails/UserDetailsComponent";

import {
  UserDetailsNavigationProp,
  UserDetailsRouteProp
} from "../types/navigation";

import styles from "./sharedStyles";

/**
 * hooks
 */
import { UserDetails } from "../types/resource";
import { getUserDetails } from "../api/apiClient";

const useUserDetailsHook = (id?: string): UserDetails | null => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    getUserDetails(id)
      .then((response) => setUser(response))
      .catch((err) => {
        console.error(err);
        // handle error
      });

    return (): void => {
      // cleanup
      setUser(null);
    };
  }, []);

  return user;
};

/**
 * component
 */
type Props = {
  navigation: UserDetailsNavigationProp;
  route: UserDetailsRouteProp;
};

const UserDetailsView = ({ navigation, route }: Props): ReactElement => {
  const user = useUserDetailsHook(route.params.id);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        {!user ? (
          <ActivityIndicator />
        ) : (
          <UserDetailsComponent navigation={navigation} user={user} />
        )}
      </SafeAreaView>
    </View>
  );
};

export default UserDetailsView;
