import React, { useState } from 'react';

const Room = (props) => {
  const [newMessage, setNewMessage] = useState("");
  
  console.log(props);

  return (
    <div>
      <h2>{props.room.name}</h2>

      <form>
        <label>
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
        </label>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Room;