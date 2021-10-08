import * as RoomAPIUtil from '../util/rooms_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';

export const receiveRooms = (rooms) => ({
  type: 'RECEIVE_ROOMS',
  rooms
})

const receiveRoom = (room) => ({
  type: 'RECEIVE_ROOM',
  room
})

const receiveRoomErrors = (errors) => ({
  type: 'RECEIVE_ROOM_ERRORS',
  errors
})

// export const fetchRoomsForUser = (userId) => dispatch => (
//   RoomAPIUtil.fetchRoomsForUser(userId)
//     .then(rooms => dispatch(receiveRooms(rooms)))
// );

export const fetchRooms = (roomIds) => dispatch => (
  RoomAPIUtil.fetchRooms(roomIds)
    .then(rooms => dispatch(receiveRooms(rooms)))
)

export const fetchRoom = (roomId) => dispatch => (
  RoomAPIUtil.fetchRoom(roomId)
    .then(room => dispatch(receiveRoom(room)))
)

export const createRoom = (room) => dispatch => (
  RoomAPIUtil.createRoom(room)
    .then(
      room => dispatch(receiveRoom(room)),
      errors => dispatch(receiveRoomErrors(errors.responseJSON))
    )
)