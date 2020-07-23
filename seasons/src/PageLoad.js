import React from 'react';

const PageLoader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// object with default property
PageLoader.defaultProps = {
  message: 'Loading...'
};

export default PageLoader;
