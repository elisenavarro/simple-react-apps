import { combineReducers } from 'redux';
 
const songsReducer = () => {
  // static array, example
  return [
    { title: `Blowin’ In The Wind`, artist: 'Bob Dylan', duration: '3:40' },
    { title: `Hey Jude`, artist: 'The Beatles',  duration: '3:30' },
    { title: `Imagine`, artist: 'John Lennon',  duration: '3:00' },
    { title: `What’d I Say`, artist: 'Ray Charles',  duration: '2:50' },
    { title: `What A Wonderful World`, artist: 'Louis Armstrong', duration: '3:15' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  // if we expand types in the future
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer, 
  selectedSong: selectedSongReducer
});