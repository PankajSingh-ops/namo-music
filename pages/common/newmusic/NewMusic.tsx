import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const NEW_MUSIC_DATA = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952',
    duration: '3:20',
    url: 'https://soundcloud.com/example/blinding-lights',
  },
  {
    id: '2',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    image: 'https://example.com/save-your-tears-cover.jpg',
    duration: '3:35',
    url: 'https://soundcloud.com/example/save-your-tears',
  },
  {
    id: '3',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    image: 'https://example.com/watermelon-sugar-cover.jpg',
    duration: '2:54',
    url: 'https://soundcloud.com/example/watermelon-sugar',
  },
  {
    id: '4',
    title: 'As It Was',
    artist: 'Harry Styles',
    image: 'https://example.com/as-it-was-cover.jpg',
    duration: '2:47',
    url: 'https://soundcloud.com/example/as-it-was',
  },
];

const NewMusic = () => {
  const navigation = useNavigation();
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  const handlePlayTrack = (trackId: string) => {
    // TODO: Implement actual audio playback logic
    setPlayingTrackId(trackId === playingTrackId ? null : trackId);
    console.log(`Playing/Pausing track with ID: ${trackId}`);
  };

  const renderMusicItem = ({item}: {item: (typeof NEW_MUSIC_DATA)[0]}) => (
    <View style={styles.musicItem}>
      <Image source={{uri: item.image}} style={styles.albumCover} />
      <View style={styles.musicInfo}>
        <Text style={styles.trackTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.artistName} numberOfLines={1}>
          {item.artist}
        </Text>
        <Text style={styles.trackDuration}>{item.duration}</Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => handlePlayTrack(item.id)}>
        <Icon
          name={playingTrackId === item.id ? 'pause' : 'play'}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Music</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TopMusic')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={NEW_MUSIC_DATA}
        renderItem={renderMusicItem}
        keyExtractor={item => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#1DB954',
    fontSize: 16,
  },
  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 10,
  },
  albumCover: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  musicInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  trackTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#b3b3b3',
    fontSize: 14,
    marginTop: 5,
  },
  trackDuration: {
    color: '#b3b3b3',
    fontSize: 12,
    marginTop: 5,
  },
  playButton: {
    backgroundColor: '#1DB954',
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewMusic;