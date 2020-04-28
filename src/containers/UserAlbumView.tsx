import React, { ReactElement, useState, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import sharedStyles from "./sharedStyles";

import { UserAlbumRouteProp } from "../types/navigation";
import { getPhotos } from "../api/apiClient";
import { Photo } from "../types/resource";

type Props = {
  route: UserAlbumRouteProp;
};

const styles = StyleSheet.create({
  image: { height: 150, width: 150 }
});

const usePhotosHook = (
  albumId: number
): { photos: Array<Photo>; isLoading: boolean } => {
  const [photos, setPhotos] = useState<Array<Photo>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPhotos({ albumId, _limit: 18 })
      .then((response) => {
        setPhotos(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // handle error
      });
  }, []);

  return { isLoading, photos };
};

const PhotoComponent = (photo: Photo): ReactElement => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: photo.thumbnailUrl }} />
    </View>
  );
};

const UserAlbumView = ({ route }: Props): ReactElement => {
  const albumId = parseInt(route?.params?.albumId);
  const { photos, isLoading } = usePhotosHook(albumId);

  return (
    <View style={sharedStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={photos}
          numColumns={3}
          keyExtractor={(_, index): string => index.toString()}
          renderItem={({ item }): ReactElement => <PhotoComponent {...item} />}
        />
      )}
    </View>
  );
};

export default UserAlbumView;
