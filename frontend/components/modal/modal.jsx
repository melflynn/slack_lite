import React from 'react';
import CreateRoomModal from './create_room_modal';

import styles from './modal.module.scss';

const Modal = (props) => {
  let {name, ...otherProps} = props;

  let modal;
  switch (name) {
    case 'CreateRoom':
      modal = <CreateRoomModal {...otherProps}/>;
      break;
    default: 
      modal = null;
  }

  if (modal) {
    return <div className={styles.modalBackground} onClick={props.updateModal}>
        {modal}
      </div>
  } else {
    
  }
}

export default Modal;