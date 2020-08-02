import React from 'react';

const Link = ({ className, href, children }) => {
  // navigation event to notify each component that URL changed
  const onClick = (event) => {
    // allows user to open link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // prevent full-page reload
    event.preventDefault();
    // change URL in click event, empty obj, empty string, href for each component
    window.history.pushState({}, '', href);

    // comm to components that URL changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;