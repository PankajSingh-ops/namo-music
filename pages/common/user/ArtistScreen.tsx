import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Mock data - replace with actual data fetching
const artistsData = [
  {
    id: '1',
    name: 'The Weeknd',
    followers: '78,456,321',
    genre: 'Pop, R&B',
    profilePic: 'https://example.com/artist-profile.jpg',
  },
  {
    id: '2',
    name: 'Drake',
    followers: '65,234,987',
    genre: 'Hip Hop, Rap',
    profilePic: 'https://example.com/artist-profile.jpg',
  },
  // Add more artists...
];

const ArtistsScreen = ({navigation}: any) => {
  const renderArtistItem = ({item}: any) => (
    <TouchableOpacity style={styles.artistItem}>
      <Image
        source={{uri: item.profilePic}}
        style={styles.artistProfilePic}
        defaultSource={require('../../../assests/logo/logo.png')}
      />
      <View style={styles.artistDetails}>
        <Text style={styles.artistName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.artistInfo}>
          {item.followers} Followers • {item.genre}
        </Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Artists</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={artistsData}
        renderItem={renderArtistItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.artistList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  artistList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  artistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 10,
  },
  artistProfilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  artistDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  artistName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistInfo: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  followButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ArtistsScreen;
