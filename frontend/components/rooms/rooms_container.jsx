import React from 'react';
import { connect } from 'react-redux';
import { fetchRoomsForUser } from '../../actions/room_actions';
import RoomsIndex from './rooms';

const mapStateToProps = (state) => ({
  rooms: Object.values(state.entities.rooms),
  currentUserId: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  fetchRoomsForUser: (userId) => dispatch(fetchRoomsForUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsIndex);