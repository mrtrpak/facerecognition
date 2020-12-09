import React from 'react';

import './style.css';

export default function ImageLinkForm({ onInputChange }) {
  return (
    <div>
      <p className='f3 centerAlign'>
        { 'This Brain will detect faces in pictures! Give it a try.'}
      </p>
      <div className='centerAlign'>
        <div className='form centerAlign minorBackground pa3 br3 shadow-3'>
          <input className='f4 pa2 w-80 center' type='text' onChange={onInputChange} />
          <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-blue'>Detect</button>
        </div>
      </div>
    </div>
  );
};