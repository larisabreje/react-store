import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Styles/navbar.module.css';

const Navbar = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Navbar}>
      {data.map((product, index) => {
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
        value={title}
        onChange={e => {
          setTitle(e.target.value);
          setData(
            data.filter(product => {
              if (product.title === title) {
                return true;
              }
              return false;
            })
          );
          console.log(data);
        }}
      />
    </div>
  );
};

export default Navbar;
