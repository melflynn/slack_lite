import * as messageApiUtil from '../util/message_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = (messages) => ({
  type: 'RECEIVE_MESSAGES',
  messages
})

const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  message
})

export const fetchMessagesForRoom = (roomId) => dispatch => (
  messageApiUtil.fetchMessagesForRoom(roomId)
    .then(messages => dispatch(receiveMessages(messages)))
)

export const fetchMessage = (messageId) => (dispatch) => (
  messageApiUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
)

export const createMessage = (roomId, message) => (dispatch) => (
  messageApiUtil.createMessage(roomId, message)
    .then(message => dispatch(receiveMessage(message)))
)
