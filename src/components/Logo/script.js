import React from 'react';
import Tilt from 'react-tilt';

export default function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt' options={{ max: 25 }} style={{ height: 250, width: 250 }}>
        <div className='Tilt-inner'>
          👽
        </div>
      </Tilt>
    </div>
  );
};