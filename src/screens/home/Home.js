import React, { useEffect } from 'react';

// library
import { HomeNf, getStorage } from 'gettint-drunk';
import { useNavigate } from 'react-router-dom';

// styles
import './Home.css';

// routes
import { routes } from '../../routes/routes';

function Home() {

  const navigate = useNavigate();

  const callbackUseEffect = () => {

    (async () => {

      const token = await getStorage('token');

      if (token === null) {

        navigate(routes.LOGIN)
      }
    })()

  }

  useEffect(callbackUseEffect, []);

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