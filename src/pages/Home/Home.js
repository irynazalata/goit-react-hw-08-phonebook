import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1>Welcome to our Personal Phonebook!</h1>
        <p>This is the place where you can safely keep all your contacts.</p>
        <p>
          Let's start. First of all, you need to register{' '}
          <NavLink exact to="/register" className={styles.listLink}>
            here
          </NavLink>
          .
        </p>
        <p>
          If you are already registered, just{' '}
          <NavLink exact to="/login" className={styles.listLink}>
            Log in
          </NavLink>{' '}
          and check all your contacts
        </p>
      </div>
    </>
  );
};

export default HomePage;
