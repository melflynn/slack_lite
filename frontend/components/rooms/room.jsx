import React, { useEffect, useState } from 'react';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  

  useEffect(() => {
    props.fetchMessagesForRoom(props.match.params.roomId);
    props.fetchRoom(props.match.params.roomId);
  }, []);

  if (props.room && props.messages) {

    return (
      <div>
        <h2>{props.room.name}</h2>
  
        <ul>
          {props.messages.map((message, i) => (
            <li key={i}>
              <p>{message.user_id}:</p>
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
  
        <form onSubmit={(e) => {e.preventDefault(); props.createMessage(props.match.params.roomId, {content: newMessage})}}>
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