import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  albums: Array<Album> | null;
  onPress: Function;
};

import { Album as AlbumType, Album } from "../../types/resource";
import { TouchableOpacity } from "react-native-gesture-handler";

type AlbumPropType = {
  album: AlbumType;
  onPress: Function;
};

const styles = StyleSheet.create({
  album: {
    width: 80
  },
  imagePlaceholder: {
    height: 40,
    width: 40,
    backgroundColor: "grey",
    opacity: 0.7
  },
  touchable: {
    alignContent: "center",
    flex: 1
  }
});

const AlbumComponent = ({ album, onPress }: AlbumPropType): ReactElement => {
  const { id, title } = album;

  return (
    <View style={styles.album}>
      <TouchableOpacity
        onPress={(): void => onPress(id)}
        style={styles.touchable}>
        <View style={styles.imagePlaceholder}></View>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const UserAlbums = ({ albums, onPress }: Props): ReactElement => {
  return (
    <View>
      {albums?.map((album, index) => (
        <AlbumComponent
          key={index}
          album={album}
          onPress={onPress}></AlbumComponent>
      ))}
    </View>
  );
};

export default UserAlbums;
