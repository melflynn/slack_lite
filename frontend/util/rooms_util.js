
export const fetchRooms = (roomIds) => (
  $.ajax({
    method: 'GET',
    url: `/api/rooms`,
    data: {roomIds}
  })
);

export const fetchRoom = (roomId) => (
  $.ajax({
    method: 'GET',
    url: `/api/rooms/${roomId}`
  })
);

export const createRoom = (room) => (
  $.ajax({
    method: 'POST',
    url: '/api/rooms',
    data: { room }
  })
);