import React from 'react';

export default function ImageLinkForm() {
  return (
    <div>
      <p className='f3'>
        { 'This Brain will detect faces in pictures! Give it a try.'}
      </p>
      <div className=''>
        <input className='f4 pa2 w-70 center' type='text' />
        <button className='w30 grow f4 link ph3 pv2 dib white bg-light-green'>Detect</button>
      </div>
    </div>
  );
};