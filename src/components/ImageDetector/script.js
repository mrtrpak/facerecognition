import React from 'react';

import './style.css';

const ImageDetector = ({ imageUrl }) => {
  return (
    <div className='centerAlign'>
      <img src={imageUrl} alt="none showing" />
    </div>
  );
};

export default ImageDetector;