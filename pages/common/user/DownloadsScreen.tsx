import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  ProgressBarAndroid 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Mock data - replace with actual data fetching
const downloadsData = [
  { 
    id: '1', 
    title: 'Blinding Lights', 
    artist: 'The Weeknd', 
    album: 'After Hours', 
    status: 'Completed',
    progress: 100,
    coverArt: 'https://example.com/album-cover.jpg'
  },
  { 
    id: '2', 
    title: 'Save Your Tears', 
    artist: 'The Weeknd', 
    album: 'After Hours', 
    status: 'Downloading',
    progress: 60,
    coverArt: 'https://example.com/album-cover.jpg'
  },
  // Add more downloads...
];

const DownloadsScreen = ({ navigation }:any) => {
  const renderDownloadItem = ({ item }:any) => (
    <View style={styles.downloadItem}>
      <Image 
        source={{ uri: item.coverArt }} 
        style={styles.albumCover} 
        defaultSource={require('../../../assests/logo/logo.png')}
      />
      <View style={styles.downloadDetails}>
        <Text style={styles.downloadTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.downloadSubtitle} numberOfLines={1}>
          {item.artist} • {item.album}
        </Text>
        <View style={styles.downloadStatusContainer}>
          <Text style={styles.downloadStatus}>{item.status}</Text>
          {item.status === 'Downloading' && (
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={item.progress / 100}
              color="#1DB954"
              style={styles.progressBar}
            />
          )}
        </View>
      </View>
      <TouchableOpacity>
        <Icon 
          name={item.status === 'Completed' ? 'check-circle' : 'pause-circle'} 
          size={30} 
          color="#1DB954" 
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Downloads</Text>
        <TouchableOpacity>
          <Icon name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={downloadsData}
        renderItem={renderDownloadItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.downloadList}
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
  downloadList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  downloadItem: {
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
  downloadDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  downloadTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadSubtitle: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  downloadStatusContainer: {
    marginTop: 5,
  },
  downloadStatus: {
    color: '#1DB954',
    fontSize: 12,
    marginBottom: 5,
  },
  progressBar: {
    width: '100%',
    height: 10,
  },
});

export default DownloadsScreen;