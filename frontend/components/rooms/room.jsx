import React, { useEffect, useState } from 'react';
import { createMessage } from '../../util/message_util';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(false);

      
  useEffect(() => {
    if (props.room) {
      props.fetchMessagesForRoom(props.room.id);
  
      props.fetchRoom(props.room.id)
        .then(room => props.fetchUsers(room.users))
        .then(() => setUsers(true));
    }
  }, [props.room]);

  useEffect(() => {
    if (props.room) {
      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: props.room.id },
        {
          received: data => {
            // debugger;
            props.receiveMessage(data);
            // setMessages(messages.concat(data))
          },
          speak: function(data) {
            // debugger;
            return this.perform("speak", data);
          }
        }
      );
    }

    return () => {
      App.cable.subscriptions.subscriptions.pop();
    }
  }, [props.room, messages]);


  if (users) {
    // console.log(messages);
    return (
      <div>
        <nav>
          <button onClick={props.logout}>Logout</button>
        </nav>
        
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
              <p>{props.users[message.user_id].username}:</p>
              <p>{message.message}</p>
            </li>

          ))}
        </ul>
  
        <form onSubmit={(e) => {
          e.preventDefault(); 
          // createMessage(props.room.id, {content: newMessage});
          const subs = App.cable.subscriptions.subscriptions[0]
          subs.speak({ user_id: props.currentUser.id, room_id: props.room.id, content: newMessage });
            // .filter(sub => JSON.parse(sub.identifier).id === props.room.id)
            // .forEach(sub => sub.speak({ user_id: props.currentUser.id, room_id: props.room.id, content: newMessage }));
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
    return <div>
      Welcome to Slack-Lite!
    </div>;
  }
}

export default Room;