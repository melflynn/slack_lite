import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './rooms_index.module.scss';

const RoomsIndex = (props) => {
  
  useEffect(() => {
    props.fetchUser(props.currentUserId)
      .then(user => props.fetchRooms(user.rooms))
  }, []);

  return <div className={styles.container}>
    <ul className={styles.roomList}>Rooms
      {props.rooms.map((room, i) => (
        <li key={i} className={styles.roomItem}>
          <button onClick={() => props.updateRoom(room)}>{room.name}</button>
        </li>
      ))}
    </ul>
  </div>
}

export default RoomsIndex;