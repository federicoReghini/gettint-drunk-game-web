import React, { useEffect } from 'react';

// library
import { eventEmit, eventOn, HomeNf, setStorage } from 'gettint-drunk';
import { useNavigate } from 'react-router-dom';

// styles
import './Home.css';
import { routes } from '../../routes/routes';

function Home() {

  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path)
  }

 

  return (
    <div className='container'>
      <HomeNf onQuickMatch={handleNavigation(routes.JOINLOBBY)} onCreateLobby={handleNavigation(routes.CREATELOBBY)} onLeaderBoard={handleNavigation(routes.LEADERBOARD)} />
    </div>
  )
}

export default Home;