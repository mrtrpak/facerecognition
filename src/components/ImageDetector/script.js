import React from 'react';

import './style.css';

const defaultGif = "https://media.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif"

const ImageDetector = ({ imageUrl }) => {
  return (
    <div className='centerAlign'>
      <img src={imageUrl || defaultGif} alt="none showing" />
    </div>
  );
};

export default ImageDetector;