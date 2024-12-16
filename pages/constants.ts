import { Track } from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: '1',
    url: require('../assests/audio/audio1.mp3'),
    title: 'Song One',
    artist: 'Artist One',
    artwork: 'https://example.com/images/artwork1.jpg', // URL to the artwork image
  },
  {
    id: '2',
    url: require('../assests/audio/audio2.mp3'),
    title: 'Song Two',
    artist: 'Artist Two',
    artwork: 'https://example.com/images/artwork2.jpg',
  },
  {
    id: '3',
    url: require('../assests/audio/audio3.mp3'),
    title: 'Song Three',
    artist: 'Artist Three',
    artwork: 'https://example.com/images/artwork3.jpg',
  },
];
