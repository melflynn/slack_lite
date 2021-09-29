import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from './navbar_container';
import LoginContainer from '../session_forms/login_container';
import SignupContainer from '../session_forms/signup_container';

import styles from './homepage.module.scss';

const HomePage = () => {
  const [session, setSession] = useState('login');

  const updateSession = () => {
    if (session === 'login') {
      setSession('signup');
    } else {
      setSession('login');
    }
  }

  return <div>
    <NavbarContainer/>

    <div className={styles.wrapper}>
      <h1 className={styles.welcome}>👋 Welcome to Slack-Lite!</h1>

      {session === 'login' ? <LoginContainer updateSession={updateSession}/> : <SignupContainer updateSession={updateSession}/>}
    </div>
  </div>
}

export default HomePage;