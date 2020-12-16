import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './NavBar.module.css';
import UserMenu from '../../components/UserMenu/UserMenu';
import Loader from '../../shared/Loader/Loader';
import AuthNav from '../../components/AuthNav/AuthNav';
import routes from '../../routes';

const NavBar = ({ isAuthenticated, email }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            exact
            to="/"
            className={styles.listLink}
            activeClassName={styles.listLinkActive}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className={styles.listItem}>
            <NavLink
              exact
              to="/contacts"
              className={styles.listLink}
              activeClassName={styles.listLinkActive}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
      {isAuthenticated && !email && <Loader />}
      {isAuthenticated && email && <UserMenu />}
      {!isAuthenticated && <AuthNav />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserEmail(state),
});
export default connect(mapStateToProps)(NavBar);
