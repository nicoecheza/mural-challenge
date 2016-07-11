/*
** Types
*/
import MESSAGES from "types/messages";

/*
** Actions
*/
import { updateScrollPosition, updateLeader } from "actions/sockets";

export default function messages(ws, dispatch) {

	ws.onmessage = response => {

        response = JSON.parse(response.data);

		switch (response.type) {

			case MESSAGES.UPDATE_SCROLL:
                return dispatch(updateScrollPosition(response));

            case MESSAGES.UPDATE_LEADER:
                return dispatch(updateLeader(response));

			default:
				return null;

		}

	};

}
