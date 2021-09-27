import * as sessionUtil from '../util/session_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const receiveCurrentUser = (user) => ({
  type: 'RECEIVE_CURRENT_USER',
  user
})

export const logoutCurrentUser = () => ({
  type: 'LOGOUT_USER'
})

export const login = (user) => (dispatch) => {
  return sessionUtil.login(user)
  .then(user => {
    return dispatch(receiveCurrentUser(user))
  })
}

export const signup = (user) => (dispatch) => (
  sessionUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);
