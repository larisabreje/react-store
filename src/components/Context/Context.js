import { createContext, useEffect, useState } from 'react';
export const globalContext = createContext();

const Context = ({children}) => {
    let url = `https://dummyjson.com/products`;
    const [search, setSearch] = useState('');
    const [sendDataSearch, setSendDataSearch] = useState('');
    const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(url + sendDataSearch);
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
        <globalContext.Provider
          value={{
            data:[data, setData],
            inputSearch: [search, setSearch],
            dataSearch: [sendDataSearch, setSendDataSearch]
          }}>
          {children}
        </globalContext.Provider>
      );
}

export default Context;

