import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImgList = props => {
  // map to render a new array (list) 
  const images = props.images.map((image) => {
  // define a key on the root element being rendered
  return <ImageCard key={image.id} image={image}/>;
  });

  return <div className="image-list">{images}</div>;
};

export default ImgList;