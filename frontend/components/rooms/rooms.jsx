import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RoomsIndex = (props) => {
  
  useEffect(() => {
    props.fetchRoomsForUser(props.currentUserId)
  }, []);

  return <div>
    <ul>
      {props.rooms.map((room, i) => (
        <Link to={`/rooms/${room.id}`}key={i}>{room.name}</Link>
      ))}
    </ul>
  </div>
}

export default RoomsIndex;