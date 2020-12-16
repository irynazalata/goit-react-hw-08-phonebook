import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          exact
          to="/register"
          className={styles.listLink}
          activeClassName={styles.listLinkActive}
        >
          Register
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          exact
          to="/login"
          className={styles.listLink}
          activeClassName={styles.listLinkActive}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
