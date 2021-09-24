import * as RoomAPIUtil from '../util/rooms_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

export const receiveRooms = (rooms) => ({
  type: 'RECEIVE_ROOMS',
  rooms
})

export const fetchRoomsForUser = (userId) => dispatch => (
  RoomAPIUtil.fetchRoomsForUser(userId)
    .then(rooms => dispatch(receiveRooms(rooms)))
);