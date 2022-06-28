import { getStorage } from 'gettint-drunk';
import React, { useEffect, useState } from 'react';

// react router and routes path
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';

// screens
import CreatesLobby from './screens/createLobby/CreateLobby';
import Home from './screens/home/Home';
import JoinLobby from './screens/joinLobby/JoinLobby';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import Registration from './screens/registration/Registration';

const initState = {
  isLoggedIn: false
}

function Routing() {

  const [state, setState] = useState(initState);

  function callbackUseEffect() {
    const newState = Object.assign({}, state);
    (async () => {

      const token = await getStorage('token');

      if (token !== null) {

        newState.isLoggedIn = true;
      } else {

        newState.isLoggedIn = false;
      }
    })()

    console.log(newState);
    setState({
      ...newState
    });
  }

  useEffect(callbackUseEffect, []);

  return (
    <Routes>
     <Route index element={state.isLoggedIn ? <Home /> : <Login />}/>
     <Route path={routes.HOME} element={<Home />}/>
     <Route path={routes.LOGIN} element={<Login />}/>
     <Route path={routes.REGISTRATION} element={<Registration />}/>
     <Route path={routes.CREATELOBBY} element={<CreatesLobby />}/>
     <Route path={routes.JOINLOBBY} element={<JoinLobby />}/>
     <Route path={routes.LEADERBOARD} element={<Leaderboard />}/>
    </Routes>
  )
}

export default Routing;