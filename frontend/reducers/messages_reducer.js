import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";


const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message
      return newState;
    default: 
      return state;
  }
}

export default messagesReducer;