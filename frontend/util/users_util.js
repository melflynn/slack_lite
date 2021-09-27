
export const fetchUsers = (userIds) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: {userIds}
  })
)

export const fetchUsersForRoom = (roomId) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: {roomId}
  })
)

export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)