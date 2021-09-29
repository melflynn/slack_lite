import React, { useState } from 'react';

import styles from './session.module.scss';


const SessionForm = ({ sessionAction, sessionCommand, updateSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <div className={styles.labelDiv}>
          <label className={`${styles.label} ${styles.labelFirst}`}>USERNAME
          </label>
            <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label className={styles.label}>PASSWORD
          </label>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.sessionButton} onClick={(e) => {e.preventDefault(); sessionAction({username, password})}}>{sessionCommand}</button>
          <button className={styles.alternateButton} onClick={updateSession}>{sessionCommand === 'SIGN UP' ? 'Log in' : 'Sign up'}</button>
        </div>
      </form>

    </div>
  )
}

export default SessionForm;