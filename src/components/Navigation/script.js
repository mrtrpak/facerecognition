import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p 
          className='f3 link dim black underline-hover pa3 pointer'
          onClick={() => onRouteChange('signout')}
          >
          SIGN OUT
        </p>
      </nav>
    );
    } else {
      return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p 
          className='f3 link dim black underline-hover pa3 pointer'
          onClick={() => onRouteChange('signin')}
          >
            SIGN IN
          </p>
          <p 
            className='f3 link dim black underline-hover pa3 pointer'
            onClick={() => onRouteChange('register')}
            >
            REGISTER
          </p>
      </nav>
    );
  }
};

export default Navigation;