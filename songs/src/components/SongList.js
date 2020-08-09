import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              // call Action Creator 'SelectSong'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // at some point in future, this.props === { songs: state.songs }
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// called with all State in ReduxStore
const mapStateToProps = (state) => {
  // going to show up as props inside of SongList component
  return { songs: state.songs };
}

// returns a function and invokes the returned fuction
export default connect(mapStateToProps, { selectSong }) (SongList);

