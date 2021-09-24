import React from 'react';
import { connect } from 'react-redux';
import Room from './room';

const mapStateToProps = (state, ownProps) => ({
  room: state.entities.rooms[ownProps.match.params.roomId]
})

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps, null)(Room);