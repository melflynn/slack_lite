
export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/session',
    data: { user }
  })
)

export const signup = (user) => (
  $.ajax({
    method: 'POST', 
    url: '/api/users',
    data: { user }
  })
)