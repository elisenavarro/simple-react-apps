import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // get Route to re-render
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      // cleanup to remove
      window.removeEventListener('popstate', onLocationChange);
    };
  // only run once, when 1st rendered  
  }, []);

  // route component to display child or hide
  return currentPath === path ? children : null;
};

export default Route;