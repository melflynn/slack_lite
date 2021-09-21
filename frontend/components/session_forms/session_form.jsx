import React, { useState } from 'react';



const SessionForm = ({ sessionAction, sessionCommand }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => {e.preventDefault(); sessionAction({username, password})}}>
      <label>Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button>{sessionCommand}!</button>
    </form>
  )
}

export default SessionForm;