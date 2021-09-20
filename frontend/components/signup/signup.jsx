import React, { useState } from 'react';



const Signup = ({ signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => {e.preventDefault(); signup({username, password})}}>
      <label>Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button>Sign Up!</button>
    </form>
  )
}

export default Signup;