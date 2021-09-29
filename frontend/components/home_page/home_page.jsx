import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from './navbar_container';
import LoginContainer from '../session_forms/login_container';

import styles from './homepage.module.scss';

const HomePage = () => (
  <div>
    <NavbarContainer/>

    <div className={styles.wrapper}>
      <h1 className={styles.welcome}>👋 Welcome to Slack-Lite!</h1>

      {/* <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav> */}

      <LoginContainer />
    </div>
  </div>
)

export default HomePage;