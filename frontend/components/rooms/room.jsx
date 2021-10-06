import React, { useEffect, useState, useRef } from 'react';

import styles from './room.module.scss';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState(false);
  const [formFocus, setFormFocus] = useState(false);

  // const messagesEndRef = useRef(null)

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  useEffect(() => {
    if (props.room) {
      const chat = document.getElementsByClassName(styles.chat)[0];
      if (chat) {
        chat.scrollTop = chat.scrollHeight;
      }
    }
  });
      
  useEffect(() => {
    if (props.room) {
      props.fetchMessagesForRoom(props.room.id);
  
      props.fetchRoom(props.room.id)
        .then(room => props.fetchUsers(room.users))
        .then(() => setUsers(true));

      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: props.room.id },
        {
          received: data => {
            props.receiveMessage(data);
          },
          speak: function(data) {
            return this.perform("speak", data);
          }
        }
      );
    }

    return () => {
      App.cable.subscriptions.subscriptions.pop();
    }
  }, [props.room]);


  if (users) {
    return (
      <div className={styles.container}>
        
        <h2 className={styles.title}>{props.room.name}</h2>
  
        <ul className={styles.chat}>
          {props.messages.map((message, i) => (
            <li key={i} className={styles.message}>
              <p className={styles.username}>{props.users[message.user_id].username} </p>
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
  
        <form className={`${styles.messageForm} ${formFocus ? styles.messageFormFocus : styles.messageFormUnfocus}`}
          onSubmit={(e) => {
                e.preventDefault(); 
                const subscription = App.cable.subscriptions.subscriptions[0]
                subscription.speak({ user_id: props.currentUser.id, room_id: props.room.id, content: newMessage });
                setNewMessage("");
                }}
        >
          <label>
            <input 
              type="text" 
              value={newMessage} 
              placeholder={`Message ${props.room.name}`}
              className={styles.input} 
              onFocus={() => setFormFocus(true)}
              onBlur={() => setFormFocus(false)}
              onChange={(e) => setNewMessage(e.target.value)}/>
          </label>
          <div className={styles.messageOptions}>
              <i className={`fas fa-paper-plane ${newMessage.length > 0 ? styles.sendMessageGreen : styles.sendMessage}`}
                onClick={(e) => {
                e.preventDefault(); 
                const subscription = App.cable.subscriptions.subscriptions[0]
                subscription.speak({ user_id: props.currentUser.id, room_id: props.room.id, content: newMessage });
                setNewMessage("");
                }}>
              </i>
          </div>
        </form>
      </div>
    )
  } else {
    return <div className={styles.container}>
      Welcome to Slack-Lite!
    </div>;
  }
}

export default Room;