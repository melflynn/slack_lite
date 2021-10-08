import React, { useState } from 'react';

import styles from './modal.module.scss';

const createRoomModal = (props) => {
  const [name, setName] = useState("");

  return <div className={styles.modalBox} onClick={(e) => {e.stopPropagation()}}>
    <h2 className={styles.createRoomHeader}>Create a Room</h2>
    <form className={styles.createRoomForm} onSubmit={() => {props.createRoom({name: name}); props.updateModal();}} >
      <label>Name: </label>
      <input className={styles.createRoomInput} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className={name.length > 0 ? styles.createRoomButtonGreen : styles.createRoomButton}>CREATE</button>
    </form>
  </div>

}

export default createRoomModal;