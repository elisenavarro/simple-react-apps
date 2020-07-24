import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImgList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // need to use arrow func and async kwd to assign to an instance property
  onSearchSubmit = async term  => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render () {
    return (
      <div className="ui container" style={{marginTop: 10}}>
        {/* prop passed into the SearchBar class component */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImgList images={this.state.images}/>
      </div>    
    );
  }
}

export default App;