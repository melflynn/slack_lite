import React from 'react';
import styles from './navbar.module.scss';

const Navbar = (props) => {
  return <nav className={styles.nav}>
    <img className={styles.navLogo} src={window.slackLogo} />
    {props.loggedIn ? 
      <button onClick={props.logout}>Logout</button>
    : ""}
  </nav>
}

export default Navbar;