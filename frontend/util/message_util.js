
export const fetchMessagesForRoom = (roomId) => (
  $.ajax({
    method: 'GET',
    url: `/api/rooms/${roomId}/messages`
  })
)

export const fetchMessage = (messageId) => (
  $.ajax({
    method: 'GET',
    url: `/api/messages/${messageId}`
  })
)

export const createMessage = (roomId, message) => (
  $.ajax({
    method: 'POST',
    url: `/api/rooms/${roomId}/messages`,
    data: { message }
  })
)