import { RECEIVE_ROOM, RECEIVE_ROOM_ERRORS } from '../actions/room_actions';

const roomErrorsReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROOM_ERRORS:
      return action.errors;
    case RECEIVE_ROOM:
      return null;
    default:
      return state;
  }
}

export default roomErrorsReducer;