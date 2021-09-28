import React, { useEffect, useState } from 'react';
import { createMessage } from '../../util/message_util';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
    props.fetchMessagesForRoom(props.match.params.roomId);

    props.fetchRoom(props.match.params.roomId)
      .then(room => props.fetchUsers(room.users));
  }, []);

  useEffect(() => {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          // console.log(messages);
          setMessages(messages.concat(data.message))
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
  }, [messages]);


  if (props.room) {
    console.log(messages);
    return (
      <div>
        <h2>{props.room.name}</h2>
  
        <ul>
          {props.messages.map((message, i) => (
            <li key={i}>
              <p>{props.users[message.user_id].username}:</p>
              <p>{message.content}</p>
            </li>
          ))}
          {messages.map((message, i) => (
            <li key={i}>
              <p>Unknown:</p>
              <p>{message}</p>
            </li>
          ))}
        </ul>
  
        <form onSubmit={(e) => {
          e.preventDefault(); 
          createMessage(props.match.params.roomId, {content: newMessage});
          App.cable.subscriptions.subscriptions[0].speak({ message: newMessage });
          setNewMessage("");
        }}>
          <label>
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
          </label>
          <button>Send</button>
        </form>
      </div>
    )
  } else {
    return null;
  }
}

export default Room;