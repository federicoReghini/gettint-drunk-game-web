import React from 'react';

// library
import { HomeNf } from 'gettint-drunk/dist/components';
import {useNavigate} from 'react-router-dom';

// styles
import './Home.css';
import { routes } from '../../routes/routes';

function Home() {

  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
     navigate(path)
  }

  const handleQuickGame = () => {

  }

  return (
    <div className='container'>
      <HomeNf onQuickGame={handleQuickGame} onCreateLobby={handleNavigation(routes.CREATELOBBY)} onLeaderBoard={handleNavigation(routes.LEADERBOARD)} />
    </div>
  )
}

export default Home