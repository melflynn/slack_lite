import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RoomsIndex = (props) => {
  
  useEffect(() => {
    props.fetchUser(props.currentUserId)
      .then(user => props.fetchRooms(user.rooms))
  }, []);

  return <div>
    <ul>
      {props.rooms.map((room, i) => (
        <li key={i}>
          <button onClick={() => props.updateRoom(room)}>{room.name}</button>
        </li>
      ))}
    </ul>
  </div>
}

export default RoomsIndex;