import React, { useEffect } from 'react';

// library
import { connectWS, getStorage, LobbyContainer } from 'gettint-drunk';

// navigation
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { getMessage, sendRequestToWs } from 'gettint-drunk/dist/services/genericWebSocket';
import { sendMessage } from 'gettint-drunk/dist/services/genericWebSocket';
let id;
function Game() {

  const navigate = useNavigate();
  const location = useLocation();

  const lobbyId = location.state.lobbyId

  useEffect(() => {
    connectWS();
    (async () => {
      
      id = await getStorage('user');
      getMessage(id);
      setTimeout(() => {
          const message = {
            user_id: id,
            method: "connectLobby"
          }
          sendMessage(message);
      }, 1000);
    })()
    // connectWS()
    // sendRequestToWs('startMatch', null, id)
  },[])

  const handleNavigation = () => {
    navigate(routes.HOME);
  }

  return (
    <div>
      <LobbyContainer 
      onAfterQuit={handleNavigation}
      lobbyId={lobbyId}
      />
    </div>
  )
}

export default Game;