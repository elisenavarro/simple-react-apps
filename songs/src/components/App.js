import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// functional component, since data/state stored in Redux
const App = () => {
  return (
    <div className="ui container grid" style={{marginTop: 40}}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
