import React, { useState } from 'react';
import RoomsIndex from './rooms_index';
import Room from './room';

const Main = (props) => {
  const [room, setRoom] = useState(null);

  const updateRoom = (room) => {
    setRoom(room);
  }

  return <div>
    <RoomsIndex 
      rooms={props.rooms}
      currentUserId={props.currentUserId}
      fetchRooms={props.fetchRooms}
      fetchUser={props.fetchUser}
      logout={props.logout}
      updateRoom={updateRoom}
    />

    <Room
      room={room}
      messages={props.messages}
      users={props.users}
      currentUser={props.currentUser}
      fetchMessagesForRoom={props.fetchMessagesForRoom}
      fetchRoom={props.fetchRoom}
      fetchUsers={props.fetchUsers}
      logout={props.logout}
    />

  </div>
}

export default Main;