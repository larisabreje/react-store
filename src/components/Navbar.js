import React from 'react';
import { useContext } from 'react';
import styles from './Styles/navbar.module.css';
import { globalContext } from './Context/Context';
import { FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const { currentData, inputSearch, dataSearch } = useContext(globalContext);
  const [data] = currentData;
  const [search, setSearch] = inputSearch;
  const [, setSendDataSearch] = dataSearch;
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setSendDataSearch(`/search?q=${search}`);
    }
  };
  const capitalizeFirstLetter = value => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  return (
    <div className={styles.Navbar}>
      {data.map((product, index) => {
        if (index % 5 === 0) {
          return (
            <div className={styles.Category} key={index}>
              {capitalizeFirstLetter(product.category)}
            </div>
          );
        }
      })}
      <div className={styles.SearchContainer}>
        <input
          type="text"
          className={styles.Search}
          placeholder="Search"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <FiSearch
          className={styles.SearchIcon}
          onClick={() => setSendDataSearch(`/search?q=${search}`)}
        />
      </div>
    </div>
  );
};

export default Navbar;
