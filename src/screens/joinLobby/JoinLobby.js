import React from 'react';

// library
import { JoinLobbyNf } from 'gettint-drunk';

// navigation
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

function JoinLobby() {

  const navigate = useNavigate();


  const handleNavigation = () => {
    navigate(routes.GAME);
  }


  return (
    <JoinLobbyNf onStartMatch={handleNavigation} />
  )
}

export default JoinLobby