import { LoginNf } from 'gettint-drunk';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleNavigation = (routes) => () => {
    navigate(routes);
  }

  return (
   <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
   }}>
     <LoginNf onPressSubmit={handleNavigation('Home')} onGoToRegistration={handleNavigation('Registration')} />
   </div>
  )
}

export default Login;