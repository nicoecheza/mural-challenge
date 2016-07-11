/*
** Services
*/
import { connectToWS, getConn } from "services/sockets/conn";

/*
** Constants
*/
export const UPDATE_SCROLL = "UPDATE_SCROLL",
             UPDATE_LEADER = "UPDATE_LEADER";

export function updateScrollPosition(message) {
    return { type: UPDATE_SCROLL, position: message.position };
}

export function updateLeader(message) {
    return { type: UPDATE_LEADER, leader: message.leader };
}

export function sendScrollEvent(payload) {

    return (dispatch, getState) => {

        getConn().send(JSON.stringify({ position: payload }));

    };

}

export function establishWSConnection(id) {

    return (dispatch, getState) => {

        connectToWS(dispatch, `ws://localhost:8090?reader=${ id }`);

    }

}
