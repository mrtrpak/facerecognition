import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p 
          className='f3 link dim black underline pa3 pointer'
          onClick={() => onRouteChange('signIn')}
          >
          Sign Out
        </p>
      </nav>
    );
    } else {
      return (
        <div>
          <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p 
            className='f3 link dim black underline pa3 pointer'
            onClick={() => onRouteChange('signIn')}
            >
              Sign In
            </p>
          </nav>
          <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p 
              className='f3 link dim black underline pa3 pointer'
              onClick={() => onRouteChange('signIn')}
              >
              Register
            </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;