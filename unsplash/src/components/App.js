import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID wxhTzOANJJJXVaMgMReg2owZ705jxn3qp0ZjCEPdyE4' 
      }
    });
  }

  render () {
    return (
      <div className="ui container" style={{marginTop: 10}}>
        {/* prop passed into the SearchBar class component */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>    
    );
  }
}

export default App;