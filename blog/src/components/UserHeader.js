import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    // find user with value === this.props.userId
    // refactor to add to mapStateTo Props const user = this.props.users.find((user) => user.id === this.props.userId)
    const {user} = this.props

    if (!user) {
      return null;
    }

  return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // extract anything that will update Redux State and components props  
  return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(
  mapStateToProps, 
)(UserHeader);