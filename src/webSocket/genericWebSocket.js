import { eventEmit, eventOn, setStorage } from "gettint-drunk";
import { quitLobby } from "gettint-drunk/dist/services/api/lobbyapi";


const WEBSOCKET = 'ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws'

var WS = null

export var MATCH = null;
let LOBBY = null;

export function connect(idUser) {
    WS = new WebSocket(WEBSOCKET);

    WS.onopen = () => {
        console.log("CONNECTED");
    }

    WS.onmessage = (event) => {
        console.log('onmessage', event.data);

        const WSDATA = JSON.parse(event.data);

        if (WSDATA.hasOwnProperty("idLobby")) {
            eventEmit('lobby', event.data)
        } else {
             eventOn('match', e => {
                MATCH = JSON.parse(e);
             })
            console.log(MATCH);
            if (MATCH === null || undefined) {
                eventEmit('match', event.data);
                eventEmit('isMatch', true);
                
                setTimeout(() => {
                    requestCard(idUser);
                }, 1000);
                return MATCH = event.data;

            } else {
                eventEmit('match', event.data);

                return MATCH = event.data; 
            }
        }
    }

}

export function disconnect() {
    if (WS !== null) {
        WS.close();
    }
}

export function sendMessage(message) {
    WS.send(JSON.stringify(message));
}

export function requestCard(idUser) {
    // sendMessage("/app/room/" + lobby.idLobby + "/request_card/" + user.id);
    const message = {
        user_id: idUser,
        method: "requestCard"
    }
    sendMessage(message);
    setTimeout(() => {
        endMatch(idUser);
    }, 100);
}

export function stopPlaying(idUser) {
    const message = {
        user_id: idUser,
        method: "stopPlaying"
    }
    sendMessage(message);
    setTimeout(() => {
        endMatch(idUser);
    }, 100);
}

export function changeLobbyAccess(idUser) {
    console.log("changing access");
     eventOn('lobby', e => {
        LOBBY = JSON.parse(e)
     })
    const message = {
        user_id: idUser,
        method: "changeLobbyAccess",
        accessType: !LOBBY.accessType
    }
    sendMessage(message);
}

export function startMatch(idUser) {
    const message = {
        user_id: idUser,
        method: "startMatch"
    }
    sendMessage(message);
}

export function endMatch(idUser) {
    console.log("check end match...");
    const message = {
        user_id: idUser,
        method: "checkEndMatch",
    }
    sendMessage(message);
}

export function quitLobbyWs(token, idUser) {
    quitLobby(token).then(response => {
        if (response?.data?.esito) {

             eventOn('lobby', e => {
                LOBBY = JSON.parse(e);
             });

            console.log('EvLobby', LOBBY);

            if (LOBBY !== undefined && WS !== null) {
                const message = {
                    user_id: idUser,
                    method: "quitLobby",
                    idLobby: LOBBY.idLobby
                }
                sendMessage(message);
            }
            disconnect();
        } else {
            console.log("Cannot disconnect");
        }
    })
}

export function quitGame(idUser) {
    const message = {
        user_id: idUser,
        method: "quitMatch"
    }
    sendMessage(message);
    disconnect();
}

export function quitMatch(idUser) {
    const message = {
        user_id: idUser,
        method: "quitMatch"
    }
    sendMessage(message);
    setTimeout(() => {
        endMatch(idUser);
        disconnect();
    }, 100);
}

export function getMatchHand(idUser, match) {

    for (const hand of match.hands) {

        if (hand.user.id == idUser) {
            return hand;
        }
    }
}
