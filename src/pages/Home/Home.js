import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
