import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './NavBar.module.css';
import UserMenu from '../../components/UserMenu/UserMenu';
import Loader from '../../shared/Loader/Loader';

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

const NavBar = ({ isAuthenticated, email }) => {
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
      {isAuthenticated && !email && <Loader />}
      {isAuthenticated && email && <UserMenu />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserEmail(state),
});
export default connect(mapStateToProps)(NavBar);
