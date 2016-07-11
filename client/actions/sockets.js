/*
** Services
*/
import { connectToWS, getConn } from "services/sockets/conn";

/*
** Utils
*/
import calculateScrollPosition from "utils/calculateScrollPosition";

/*
** Constants
*/
export const UPDATE_SCROLL = "UPDATE_SCROLL",
             UPDATE_LEADER = "UPDATE_LEADER";

// Update reader scroll position with the one coming from the leader
export function updateScrollPosition(message) {
    const { viewportHeight, position } = message;
    return { type: UPDATE_SCROLL, position: calculateScrollPosition(viewportHeight, position) };
}

// Update leader status
export function updateLeader(message) {
    return { type: UPDATE_LEADER, leader: message.leader };
}

// Send to challenge-gateway the current scroll position and viewport height
export function sendScrollEvent(payload) {

    return (dispatch, getState) => {

        getConn().send(JSON.stringify({ ...payload }));

    };

}

// Setup websocket connection with challenge-gateway with the current reader id
export function establishWSConnection(id) {

    return (dispatch, getState) => {

        connectToWS(dispatch, `ws://localhost:8090?reader=${ id }`);

    }

}
