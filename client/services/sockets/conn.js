import messages from "./messages";

let ws, token;

/*
** WebSocket Connection conf
*/
export function connectToWS(dispatch, url) {

  ws = new WebSocket(url);

  ws.onopen = () => {

    console.log("Connected to WS: ", url);

    /* Socket Events */
    messages(ws, dispatch);

  };

  ws.onclose = () => { console.log("Disconnected!"); };

  ws.onerror = (error) => {
    console.log(`Error on socket: ${error.message}`);
    reconnectToWS(dispatch, url);
  };

  ws.onbeforeunload = () => ws.close();

}

/*
** WebSocket Connection methods
*/
export let getConn = () => ws;

export let destroyConn = () => ws.close();

export function reconnectToWS(dispatch, url) {

  if (ws.onclose) {
    console.log("Socket closed. Reconnecting...");
    connectToWS(dispatch, url);
  }

}
