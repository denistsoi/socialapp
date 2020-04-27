import React, { ReactElement } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

type Props = {
  albums: Array<Album> | null;
  onPress: Function;
};

import { Album as AlbumType, Album } from "../../types/resource";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

type AlbumProp = {
  album: AlbumType;
  onPress: Function;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  album: {
    width: 60,
    height: 60,
    borderWidth: 0.5,
    borderColor: "red",
    marginRight: 20
  },
  touchable: {}
});

const AlbumItem = ({ album, onPress }: AlbumProp): ReactElement => {
  const { id, title } = album;

  return (
    <View style={styles.album}>
      <TouchableOpacity
        onPress={(): void => onPress(id)}
        style={styles.touchable}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const UserAlbums = ({ albums, onPress }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {albums?.map((album, index) => (
          <AlbumItem key={index} album={album} onPress={onPress} />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserAlbums;
