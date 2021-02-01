import React from 'react';

import './style.css';

const defaultGif = "https://media.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif"

const ImageDetector = ({ imageUrl, box }) => {
  return (
    <div className='center'>
      <div className="absolute">
        <img id='inputImage' src={imageUrl || defaultGif} alt="n/a" />
        <div className='bounding-box'
          style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} >
        </div>
      </div>
    </div>
  );
};

export default ImageDetector;