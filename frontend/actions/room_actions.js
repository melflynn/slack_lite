import * as RoomAPIUtil from '../util/rooms_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

export const receiveRooms = (rooms) => ({
  type: 'RECEIVE_ROOMS',
  rooms
})

const receiveRoom = (room) => ({
  type: 'RECEIVE_ROOM',
  room
})

export const fetchRoomsForUser = (userId) => dispatch => (
  RoomAPIUtil.fetchRoomsForUser(userId)
    .then(rooms => dispatch(receiveRooms(rooms)))
);

export const fetchRoom = (roomId) => dispatch => (
  RoomAPIUtil.fetchRoom(roomId)
    .then(room => dispatch(receiveRoom(room)))
)