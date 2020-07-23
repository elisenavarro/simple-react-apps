import React from 'react';

// need to use a class based component bc will be handling State
class SearchBar extends React.Component {
    state = { term: '' };

  // eventHandlers using arrow function to bind value of 'this' 
  onFormSubmit = event => {
    event.preventDefault(); //keeps the browser from refreshing the form(searchbar)
    // when used in a class component, need to use this.props.onSubmit
    this.props.onSubmit(this.state.term);
  };
    
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
              {/* controlled component with a state object */}
              <input
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;