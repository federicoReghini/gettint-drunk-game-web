import { LobbyContainer } from 'gettint-drunk'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes';

function Game() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(routes.HOME);
  }

  return (
    <div>
      <LobbyContainer onAfterQuit={handleNavigation} />
    </div>
  )
}

export default Game;