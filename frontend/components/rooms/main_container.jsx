import { connect } from 'react-redux';
import Main from './main';
import { createRoom, fetchRoom, fetchRooms } from '../../actions/room_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchMessagesForRoom, receiveMessage } from '../../actions/message_actions';
import { updateModal } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  rooms: Object.values(state.entities.rooms),
  currentUserId: state.session.currentUser,
  messages: Object.values(state.entities.messages),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.currentUser],
  modal: state.ui.modal
})

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: (roomIds) => dispatch(fetchRooms(roomIds)),
  fetchRoom: (roomId) => dispatch(fetchRoom(roomId)),
  createRoom: (room) => dispatch(createRoom(room)),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
  fetchMessagesForRoom: (roomId) => dispatch(fetchMessagesForRoom(roomId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateModal: (modalName) => dispatch(updateModal(modalName)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);