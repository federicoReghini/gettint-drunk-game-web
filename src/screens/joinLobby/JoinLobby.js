// import React, { useEffect } from 'react';

// // library
// import { getStorage, JoinLobbyNf } from 'gettint-drunk';

// // navigation
// import { useNavigate } from 'react-router-dom';
// import { routes } from '../../routes/routes';
// import { playFastUser } from 'gettint-drunk/dist/services/api/userapi';
// import { deleteApi } from 'gettint-drunk/dist/services/genericServices';
// import { eventEmit } from 'gettint-drunk';
// import { eventOn } from 'gettint-drunk';
// import { createLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
// var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws')

// let id;
// let token;
// let lobby;
// let connectionEstablished;


// (async () => {
//   token = await getStorage('token')
//   await deleteApi('lobby', token)
//   id = await getStorage('user');

// })()

// function JoinLobby() {

//   const navigate = useNavigate();

//   const sendMessage = (message) => {
//     WS.send(JSON.stringify(message));
//   }
//   useEffect(() => {
//     WS.onmessage = (event) => {
//       console.log('onmessage', JSON.parse(event.data));
//       eventEmit('lobby', event.data)
//       lobby = JSON.parse(event.data)
//     }

//     createLobby(token).then(response => {
//       console.log(response.data);
//       lobby = response.data;

//       // WS.onopen = () => {
//       //   console.log("CONNECTED");
//       // }

//       connectionEstablished = false;
//       setTimeout(() => {
//         if (lobby != null && WS != null) {
//           const message = {
//             user_id: id,
//             method: "connectLobby"
//           }
//           sendMessage(message);
//           connectionEstablished = true;
//         }
//       }, 1000);
//     })

//   }, [WS.onmessage])

//   const handleNavigation = () => {
//     navigate(routes.GAME);
//   }


//   return (
//     <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
//   )
// }

// export default JoinLobby

import React, { useEffect, useState } from 'react';

// library
import { getStorage, JoinLobbyNf, LobbyContainer } from 'gettint-drunk';

// navigation
import { playFastUser } from 'gettint-drunk/dist/services/api/userapi';
import { deleteApi } from 'gettint-drunk/dist/services/genericServices';
// import { eventEmit } from 'gettint-drunk';
// import { eventOn } from 'gettint-drunk';
import { createLobby, editLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
import { connect, requestCard, sendMessage, stopPlaying } from '../../webSocket/genericWebSocket';
import { eventOn } from 'gettint-drunk';

var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws');

let id;
let token;
let lobby;

function JoinLobby() {

  const [state, setState] = useState({
    id: null,
    isMatch: false
  })


  useEffect(() => {

    (async () => {
      token = await getStorage('token')
      await deleteApi('lobby', token)
      id = await getStorage('user');
      setState({
        ...state,
        id: id
      })

      connect(id);

      // if (lobby === null) {
      editLobby(35,null,token).then(response => {
        lobby = response?.data;

        eventOn('lobby', e => {
          lobby = JSON.parse(e)
          console.log('lobby', lobby);
        })

        setTimeout(() => {
          if (WS != null) {
            const message = {
              user_id: id,
              method: "connectLobby"
            }
            sendMessage(message);
          }
        }, 1000);
      })
      // }
    })()



  }, [])

  useEffect(() => {
    eventOn('isMatch', e => {
      if (e === true) {
        console.log('faccio state');
        setState({
          ...state,
          isMatch: e
        })
      }
    })

  }, [])

  const handleNavigation = () => {
    const message = {
      user_id: id,
      method: "startMatch"
    }
    sendMessage(message);
  }


  const requestCardFunc = () => {
    requestCard(id)
  }

  const stopPlayingFunc = () => {
    stopPlaying(id)
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      {
        !state.isMatch ?
          <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
          :
          <LobbyContainer lobbyId={lobby.idLobby} userId={id} onRequestCard={requestCardFunc} onStop={stopPlayingFunc} />
      }
    </div>
  )
}

export default JoinLobby;