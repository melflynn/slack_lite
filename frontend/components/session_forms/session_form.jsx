import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const SessionForm = ({ sessionAction, sessionCommand }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); sessionAction({username, password})}}>
        <label>Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>{sessionCommand}!</button>
      </form>

      <Link to={sessionCommand === 'Sign up!' ? '/login' : '/signup'}>{sessionCommand === 'Sign up!' ? 'Log in' : 'Sign up'}</Link>
    </div>
  )
}

export default SessionForm;