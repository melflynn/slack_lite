import React from 'react';
import { connect } from 'react-redux';
import Room from './room';
import { fetchRoom } from '../../actions/room_actions';
import { createMessage, fetchMessagesForRoom } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  room: state.entities.rooms[ownProps.match.params.roomId],
  messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = (dispatch) => ({
  fetchMessagesForRoom: (roomId) => dispatch(fetchMessagesForRoom(roomId)),
  fetchRoom: (roomId) => dispatch(fetchRoom(roomId)),
  createMessage: (roomId, message) => dispatch(createMessage(roomId, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Room);