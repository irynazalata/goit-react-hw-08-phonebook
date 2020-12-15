import React, { Component } from 'react';
import styles from './UserMenu.module.css';

class UserMenu extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.text}>Email</p>
        <button className={styles.btn}>Log out</button>
      </div>
    );
  }
}

export default UserMenu;
