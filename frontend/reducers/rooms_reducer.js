import { RECEIVE_ROOMS, RECEIVE_ROOM } from '../actions/room_actions';

const roomsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ROOMS:
      return action.rooms;
    case RECEIVE_ROOM:
      newState[action.room.id] = action.room;
      return newState;
    default: 
      return state;
  }
}

export default roomsReducer;