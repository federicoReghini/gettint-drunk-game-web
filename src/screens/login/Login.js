import React from 'react';

// navigation
import { useNavigate } from 'react-router-dom';

// library
import { LoginNf } from 'gettint-drunk';

// routes
import { routes } from '../../routes/routes';

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
     <LoginNf onPressSubmit={handleNavigation(routes.HOME)} onGoToRegistration={handleNavigation(routes.REGISTRATION)} />
   </div>
  )
}

export default Login;