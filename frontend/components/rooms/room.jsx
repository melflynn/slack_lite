import React, { useEffect, useState } from 'react';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState(false);

      
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
        </ul>
  
        <form onSubmit={(e) => {
          e.preventDefault(); 
          const subscription = App.cable.subscriptions.subscriptions[0]
          subscription.speak({ user_id: props.currentUser.id, room_id: props.room.id, content: newMessage });
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