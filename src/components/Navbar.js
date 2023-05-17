import React from 'react';
import { useState, useContext } from 'react';
import styles from './Styles/navbar.module.css';
import { globalContext } from './Context/Context';

const Navbar = (props) => {
  const { props.data, props.}
  return (
    <div className={styles.Navbar}>
      {props.data.map((product, index) => {
        if (index % 5 === 0) {
          return (
            <div className={styles.Category} key={index}>
              {product.category}
            </div>
          );
        }
      })}
      <input
        type="text"
        className={styles.Search}
        placeholder="Search"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={
        () => setSendDataSearch(`search?q=${search}`)
      }>Search</button>
    </div>
  );
};

export default Navbar;
