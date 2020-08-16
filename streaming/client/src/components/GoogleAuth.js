import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null }
  
  componentDidMount(){
    // load client portion of lib within window scope in browser
    window.gapi.load('client:auth2', () => {
      // callback after client lib load success
      window.gapi.client
        // async req to google server, returns a promise
        .init({
          clientId: '732663186870-4gtbnkrnrl09rv441n53sn5hec15el8s.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // update component state
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // method w/ callback func
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // helper method, listed to change signIn status
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick =() => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // helper method
  renderAuthButton() {
    if (this.state.isSignedIn === null ) {
      return null;
    } else if ( this.state.isSignedIn ) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon'/>
            Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red googe button'>
          <i className='google icon'/>
            Sign In with Google
        </button>
      );
    }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;