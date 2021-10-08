import React from 'react';
import { connect } from 'react-redux';
import { fetchRooms, createRoom } from '../../actions/room_actions';
import { logout } from '../../actions/session_actions';
import { updateModal } from '../../actions/ui_actions';
import { fetchUser } from '../../actions/user_actions';
import RoomsIndex from './rooms_index';

const mapStateToProps = (state) => ({
  rooms: Object.values(state.entities.rooms),
  currentUserId: state.session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: (roomIds) => dispatch(fetchRooms(roomIds)),
  createRoom: (room) => dispatch(createRoom(room)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateModal: (modalName) => dispatch(updateModal(modalName)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsIndex);