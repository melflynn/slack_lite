import React from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import RoomsIndex from './rooms';

const mapStateToProps = (state) => ({
  rooms: Object.values(state.entities.rooms),
  currentUserId: state.session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: (roomIds) => dispatch(fetchRooms(roomIds)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsIndex);