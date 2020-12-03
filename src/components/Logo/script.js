import React from 'react';
import Tilt from 'react-tilt';

import Photo from '../../assets/brainLogo.png';
import './style.css';

export default function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br3 shadow-3' options={{ max: 70 }} style={{ height: 200, width: 200 }}>
        <div className='Tilt-inner'>
          <Photo />
        </div>
      </Tilt>
    </div>
  );
};