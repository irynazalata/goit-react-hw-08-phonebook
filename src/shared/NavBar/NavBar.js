import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import UserMenu from '../../components/UserMenu/UserMenu';

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/register',
    name: 'Register',
  },
  {
    to: '/login',
    name: 'Login',
  },
  {
    to: '/contacts',
    name: 'Contacts',
  },
];

const NavBar = () => {
  const items = links.map(({ to, name }) => (
    <li className={styles.listItem} key={to}>
      <NavLink
        exact
        key={name}
        to={to}
        className={styles.listLink}
        activeClassName={styles.listLinkActive}
      >
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{items}</ul>
      <UserMenu />
    </div>
  );
};
export default NavBar;
