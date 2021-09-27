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
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </li>
      ))}
    </ul>
  </div>
}

export default RoomsIndex;