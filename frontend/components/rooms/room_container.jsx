import React from 'react';
import { connect } from 'react-redux';
import Room from './room';
import { fetchRoom } from '../../actions/room_actions';
import { fetchMessagesForRoom } from '../../actions/message_actions';
import { createMessage } from '../../util/message_util';
import { fetchUsers, fetchUsersForRoom } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  room: state.entities.rooms[ownProps.match.params.roomId],
  messages: Object.values(state.entities.messages),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = (dispatch) => ({
  fetchMessagesForRoom: (roomId) => dispatch(fetchMessagesForRoom(roomId)),
  fetchRoom: (roomId) => dispatch(fetchRoom(roomId)),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Room);