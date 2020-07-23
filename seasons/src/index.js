import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDiplay from './SeasonDisplay';
import PageLoader from './PageLoad';

// allows to pull from built in functionality of react; subclassing React.Component
class App extends React.Component{
//   constructor(props){
//    super(props);
//     this.state = { lat: null, errorMessage: '' }
//   }

  // ONLY TIME USE DIRECT ASSIGNMENT
  // init 'state' object and init property within object, default to null
  state = { lat: null, errorMessage: '' }; //equivalent to constructor function above

  componentDidMount() {
    // get users location
    window.navigator.geolocation.getCurrentPosition(
      // success callback function, not called until return from constructor with position
      // take lat out of position object and use to update state obj
      position => this.setState({ lat: position.coords.latitude }),
      // failure callback, update state of errorMessage property
      error => this.setState({ errorMessage: error.message })
    );
  };

  render() {
    // ref state in JSX
    if (this.state.errorMessage && !this.state.lat){  // if error message && no lat
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat){  // no error message && get lat
      // taking prop 'lat' from state in the App component and passing as a prop into SeasonDisplay
      return <SeasonDiplay lat={this.state.lat}/>; //instance of SeasonDisplay component, get value of lat in state object 
    }
    // return loading 
    return <PageLoader message="Please accept the location request" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
