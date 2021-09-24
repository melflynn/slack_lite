import React, { useEffect } from 'react';

const RoomsIndex = (props) => {
  
  useEffect(() => {
    props.fetchRoomsForUser(props.currentUserId)
  }, []);

  return <div>
    <ul>
      {props.rooms.map((room, i) => (
        <li key={i}>{room.name}</li>
      ))}
    </ul>
  </div>
}

export default RoomsIndex;