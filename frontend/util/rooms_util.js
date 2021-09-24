
export const fetchRoomsForUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/rooms`
  })
)