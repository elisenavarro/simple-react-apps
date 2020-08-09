import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song...</div>;
  }

  return (
    <div>
      <h3>Song Details:</h3>
      <h5>
        Title: {song.title}
        <br />
        Artist: {song.artist}
        <br />
        Duration: {song.duration}
      </h5>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);