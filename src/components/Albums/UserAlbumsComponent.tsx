import React, { ReactElement } from "react";
import { View, Text } from "react-native";

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
const AlbumComponent = ({ album, onPress }: AlbumPropType): ReactElement => {
  const { id, title } = album;

  return (
    <View>
      <TouchableOpacity onPress={(): void => onPress(id)}>
        <Text>
          {id} {title}
        </Text>
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
        // <View>
        //   <Text>
        //     {album.id} {album.title}
        //   </Text>
        // </View>
      ))}
    </View>
  );
};

export default UserAlbums;
