import * as sessionUtil from '../util/session_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: 'RECEIVE_CURRENT_USER',
  user
})

export const logoutCurrentUser = () => ({
  type: 'LOGOUT_USER'
})

const receiveSessionErrors = (errors) => ({
  type: 'RECEIVE_SESSION_ERRORS',
  errors
})

export const login = (user) => (dispatch) => {
  return sessionUtil.login(user)
  .then(user => {
    return dispatch(receiveCurrentUser(user))
  }, errors => {
  return dispatch(receiveSessionErrors(errors.responseJSON))})
}

export const signup = (user) => (dispatch) => (
  sessionUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => {
      return dispatch(receiveSessionErrors(errors.responseJSON)) })
);

export const logout = () => dispatch => (
  sessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)
