
export const fetchRoomsForUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/rooms`
  })
)

export const fetchRoom = (roomId) => (
  $.ajax({
    method: 'GET',
    url: `/api/rooms/${roomId}`
  })
)