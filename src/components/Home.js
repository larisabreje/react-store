import React from 'react';
import styles from './Styles/home.module.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default Home;
