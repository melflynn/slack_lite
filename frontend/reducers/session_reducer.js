import { RECEIVE_CURRENT_USER, LOGOUT_USER } from "../actions/session_actions";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user.id}
    case LOGOUT_USER:
      return {currentUser: null}
    default: 
      return state;
  }
}

export default sessionReducer;