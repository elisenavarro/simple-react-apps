import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  
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
          // update component props, dispatch
          this.onAuthChange(this.auth.isSignedIn.get());
          // method w/ callback func
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // helper method, change auth status
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick =() => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // helper method
  renderAuthButton() {
    if (this.props.isSignedIn === null ) {
      return null;
    } else if ( this.props.isSignedIn ) {
      return (
        <button onClick={this.onSignOutClick} className='ui blue google button'>
          <i className='google icon'/>
            Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui blue googe button'>
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps, 
  {signOut, signIn}
  )(GoogleAuth);