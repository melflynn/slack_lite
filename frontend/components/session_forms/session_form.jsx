import React, { useState } from 'react';

import styles from './session.module.scss';


const SessionForm = ({ errors, sessionAction, sessionCommand, updateSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userErrors, setUserErrors] = useState([]);
  const [passErrors, setPassErrors] = useState([]);


  const renderErrors = () => {
    let inputs = document.getElementsByClassName(styles.input);
    if (sessionCommand === "SIGN UP") {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text' && errors.username) {
          inputs[i].classList.add(styles.inputErrors);
        } else if (inputs[i].type === 'text' && !errors.username) {
          inputs[i].classList.remove(styles.inputErrors); 
        } else if (inputs[i].type === 'password' && errors.password) {
          inputs[i].classList.add(styles.inputErrors);
        } else if (inputs[i].type === 'password' && !errors.password) {
          inputs[i].classList.remove(styles.inputError);
        }
      }
    } else if (sessionCommand === "LOG IN") {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.add(styles.inputErrors);
      }
      return <ul>
        {errors.login.map((error, i) => (
          <li key={i} className={styles.error}>{error}</li>
        ))}
      </ul>
    }
  }

  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <div className={styles.labelDiv}>
          <label className={styles.label}>USERNAME
          </label>
            <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {errors && errors.username ? 
              <ul>
                {errors.username.map((error, i) => (
                  <li key={i} className={styles.error}>{`username ${error}`}</li>
                ))}
              </ul> : null
            }
          <label className={styles.label}>PASSWORD
          </label>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {errors && errors.password ? 
              <ul>
                {errors.password.map((error, i) => (
                  <li key={i} className={styles.error}>{`password ${error}`}</li>
                ))}
              </ul> : null
            }
          {errors ? renderErrors() : null}
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