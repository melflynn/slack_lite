import { connect } from 'react-redux';
import Main from './main';
import { fetchRoom, fetchRooms } from '../../actions/room_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchMessagesForRoom, receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => ({
  rooms: Object.values(state.entities.rooms),
  currentUserId: state.session.currentUser,
  messages: Object.values(state.entities.messages),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: (roomIds) => dispatch(fetchRooms(roomIds)),
  fetchRoom: (roomId) => dispatch(fetchRoom(roomId)),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
  fetchMessagesForRoom: (roomId) => dispatch(fetchMessagesForRoom(roomId)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);