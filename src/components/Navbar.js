import React from 'react';
import { useContext } from 'react';
import styles from './Styles/navbar.module.css';
import { globalContext } from './Context/Context';

const Navbar = () => {
  const { currentData, inputSearch, dataSearch } = useContext(globalContext);
  const [data] = currentData;
  const [search, setSearch] = inputSearch;
  const [, setSendDataSearch] = dataSearch;
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
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={() => setSendDataSearch(`/search?q=${search}`)}>
        Search
      </button>
    </div>
  );
};

export default Navbar;
