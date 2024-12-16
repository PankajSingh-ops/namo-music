import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Mock data - replace with actual data fetching
const songsData = [
  { 
    id: '1', 
    title: 'Blinding Lights', 
    artist: 'The Weeknd', 
    album: 'After Hours', 
    duration: '3:20',
    coverArt: 'https://example.com/album-cover.jpg'
  },
  { 
    id: '2', 
    title: 'Save Your Tears', 
    artist: 'The Weeknd', 
    album: 'After Hours', 
    duration: '3:35',
    coverArt: 'https://example.com/album-cover.jpg'
  },
  // Add more songs...
];

const SongsScreen = ({ navigation }:any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const renderSongItem = ({ item }:any) => (
    <TouchableOpacity style={styles.songItem}>
      <Image 
        source={{ uri: item.coverArt }} 
        style={styles.albumCover} 
        defaultSource={require('../../../assests/logo/logo.png')}
      />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.songSubtitle} numberOfLines={1}>
          {item.artist} • {item.album}
        </Text>
      </View>
      <Text style={styles.songDuration}>{item.duration}</Text>
      <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
        <Icon 
          name={isPlaying ? 'pause-circle' : 'play-circle'} 
          size={30} 
          color="#1DB954" 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Songs</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={songsData}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.songList}
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
  songList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 10,
  },
  albumCover: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  songTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songSubtitle: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  songDuration: {
    color: '#B3B3B3',
    marginRight: 15,
  },
});

export default SongsScreen;