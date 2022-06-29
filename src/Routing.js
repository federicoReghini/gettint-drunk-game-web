import { getStorage, useLogout } from 'gettint-drunk';
import React, { useEffect, useState } from 'react';

// react router and routes path
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';

// screens
import Home from './screens/home/Home';
import CreatesLobby from './screens/createLobby/CreateLobby';
import JoinLobby from './screens/joinLobby/JoinLobby';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import Registration from './screens/registration/Registration';
import Game from './screens/game/Game';

function Routing() {

  const logout = useLogout();

  function callbackUseEffect() {
    (async () => {
      await logout.logoutExpire();
    })()
  }

  useEffect(callbackUseEffect, []);

  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.REGISTRATION} element={<Registration />} />
      <Route path={routes.CREATELOBBY} element={<CreatesLobby />} />
      <Route path={routes.JOINLOBBY} element={<JoinLobby />} />
      <Route path={routes.LEADERBOARD} element={<Leaderboard />} />
      <Route path={routes.GAME} element={<Game />} />
    </Routes>
  )
}

export default Routing;