import * as UserApiUtil from '../util/users_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUser = (user) => ({
  type: 'RECEIVE_USER',
  user
})

export const receiveUsers = (users) => ({
  type: 'RECEIVE_USERS',
  users
})

export const fetchUsers = (userIds) => dispatch => (
  UserApiUtil.fetchUsers(userIds)
    .then(users => dispatch(receiveUsers(users)))
)

export const fetchUsersForRoom = (roomId) => dispatch => (
  UserApiUtil.fetchUsersForRoom(roomId)
    .then(users => dispatch(receiveUsers(users)))
)

export const fetchUser = (userId) => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)

