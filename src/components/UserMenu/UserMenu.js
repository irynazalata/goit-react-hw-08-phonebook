import React from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import styles from './UserMenu.module.css';

const UserMenu = ({ email, isAuthenticated, onLogout }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        You are logged in as <span className={styles.span}>{email}</span>
      </p>
      <button type="button" onClick={onLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
