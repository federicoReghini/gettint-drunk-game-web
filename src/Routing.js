import React from 'react';

// react router and routes path
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';

// screens
import CreatesLobby from './screens/createLobby/CreateLobby';
import Home from './screens/home/Home';
import JoinLobby from './screens/joinLobby/JoinLobby';
import Login from './screens/login/Login';
import Registration from './screens/registration/Registration';

function Routing() {
  return (
    <Routes>
     <Route index element={<Home />}/>
     <Route path={routes.LOGIN} element={<Login />}/>
     <Route path={routes.REGISTRATION} element={<Registration />}/>
     <Route path={routes.CREATELOBBY} element={<CreatesLobby />}/>
     <Route path={routes.JOINLOBBY} element={<JoinLobby />}/>
     <Route path={routes.LEADERBOARD} element={<JoinLobby />}/>
    </Routes>
  )
}

export default Routing;