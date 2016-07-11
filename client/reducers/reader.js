
/*
** Actions
*/
import * as socketsActions from "actions/sockets";

const initialState = {
    id: Date.now(),
    scrollPos: 0,
    leader: false
};

export default function reader(state = initialState, action) {

    switch (action.type) {

        case socketsActions.UPDATE_SCROLL:
            return Object.assign({}, state, { scrollPos: action.position });

        case socketsActions.UPDATE_LEADER:
            return Object.assign({}, state, { leader: action.leader });

        default:
            return state;

    }

}
