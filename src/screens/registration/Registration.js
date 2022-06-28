import React from 'react';
import { SignupNf } from 'gettint-drunk';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const navigate = useNavigate();

  const handleNavigation = () => {

    navigate('Home');
  }

  return (
    <SignupNf onPressSubmit={handleNavigation} />
  )
}

export default Registration