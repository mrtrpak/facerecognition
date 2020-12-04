import React from 'react';

export default function ImageLinkForm() {
  return (
    <div>
      <p className='f3 centerAlign'>
        { 'This Brain will detect faces in pictures! Give it a try.'}
      </p>
      <div className='centerAlign'>
        <input className='f4 pa2 w-80 center' type='text' />
        <button className='w30 grow f4 link ph3 pv2 dib white bg-light-blue'>Detect</button>
      </div>
    </div>
  );
};