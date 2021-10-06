import React, { useState } from 'react';
import RoomsIndex from './rooms_index';
import Room from './room';
import NavbarContainer from '../home_page/navbar_container';

import styles from './main.module.scss';

const Main = (props) => {
  const [room, setRoom] = useState(null);

  const updateRoom = (room) => {
    setRoom(room);
  }

  return <div className={styles.main}>
    <NavbarContainer />
    <div className={styles.indexSidebar}>
      <RoomsIndex 
        rooms={props.rooms}
        currentUserId={props.currentUserId}
        fetchRooms={props.fetchRooms}
        fetchUser={props.fetchUser}
        logout={props.logout}
        updateRoom={updateRoom}
      />
    </div>

    <div className={styles.room}>
      <Room
        room={room}
        messages={props.messages}
        users={props.users}
        currentUser={props.currentUser}
        fetchMessagesForRoom={props.fetchMessagesForRoom}
        fetchRoom={props.fetchRoom}
        fetchUsers={props.fetchUsers}
        receiveMessage={props.receiveMessage}
        logout={props.logout}
      />
    </div>

  </div>
}

export default Main;