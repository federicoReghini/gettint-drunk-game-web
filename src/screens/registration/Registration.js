import React from 'react';
import { SignupNf } from 'gettint-drunk';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const navigate = useNavigate();

  const handleNavigation = () => {

    navigate('Home');
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <SignupNf onPressSubmit={handleNavigation} />

    </div>
  )
}

export default Registration