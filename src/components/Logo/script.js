import React from 'react';
import Tilt from 'react-tilt';

import './style.css';

import photo from '../../assets/brainLogo.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br3 shadow-3 mainBackground' options={{ max: 70 }} style={{ height: 200, width: 200 }}>
        <div className='Tilt-inner pa3 center'>
          <img src={photo} alt='Brain' className="align" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;