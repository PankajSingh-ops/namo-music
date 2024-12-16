import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Mock Data for Favorites
const favoritesData = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952',
    duration: '3:20',
    url: 'https://soundcloud.com/djgammer/sugar-were-going-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    image:
      'https://marketplace.canva.com/EAFWz37wwl0/1/0/1600w/canva-black-minimalist-photocentric-rose-on-fire-hip-hop-album-cover-laJL2q01ZUU.jpg',
    duration: '3:54',
    url: 'https://soundcloud.com/tatsunoshin_ofc/rose-bruno-mars-apt-tatsunoshin-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: '3',
    title: 'Memories',
    artist: 'Maroon 5',
    image: 'https://via.placeholder.com/150',
    duration: '3:12',
    url: 'https://soundcloud.com/djgammer/sugar-were-going-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
];

// Favorites Screen
const FavoritesScreen = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const FavoriteTrackItem = ({item}: any) => (
    <View style={styles.favoriteTrackContainer}>
      <Image source={{uri: item.image}} style={styles.favoriteTrackImage} />
      <View style={styles.favoriteTrackDetails}>
        <Text style={styles.favoriteTrackTitle}>{item.title}</Text>
        <Text style={styles.favoriteTrackArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.favoriteTrackDuration}>{item.duration}</Text>
      {isEditMode && (
        <TouchableOpacity style={styles.removeButton}>
          <Icon name="trash" size={20} color="#ff4444" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.screenTitle}>Favorites</Text>
        <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
          <Icon
            name={isEditMode ? 'close' : 'create-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={favoritesData}
        keyExtractor={item => item.id}
        renderItem={FavoriteTrackItem}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="heart-outline" size={80} color="#888" />
            <Text style={styles.emptyText}>No Favorites Yet</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Favorites Screen Styles
  favoriteTrackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  favoriteTrackImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  favoriteTrackDetails: {
    flex: 1,
  },
  favoriteTrackTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteTrackArtist: {
    color: '#b3b3b3',
    fontSize: 14,
  },
  favoriteTrackDuration: {
    color: '#b3b3b3',
    fontSize: 14,
  },
  removeButton: {
    marginLeft: 10,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: '#888',
    marginTop: 20,
    fontSize: 18,
  },
});

export {FavoritesScreen};
