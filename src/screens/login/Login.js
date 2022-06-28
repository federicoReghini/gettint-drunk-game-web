import { LoginNf } from 'gettint-drunk';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

 const navigate = useNavigate();

 const handleNavigation = () => {
  navigate('Home');
 }

  return (
    <LoginNf onPressSubmit={handleNavigation} />
  )
}

export default Login;