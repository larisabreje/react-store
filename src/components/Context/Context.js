import { createContext, useEffect, useState } from 'react';
export const globalContext = createContext();

const Context = ({ children }) => {
  const [url, setUrl] = useState('https://dummyjson.com/products');
  const [search, setSearch] = useState('');
  const [sendDataSearch, setSendDataSearch] = useState('');
  const [data, setData] = useState([]);
  const getData = async endpointUrl => {
    try {
      const response = await fetch(endpointUrl);
      const result = await response.json();
      console.log(result.products);
      setData(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  useEffect(() => {
    setUrl(`https://dummyjson.com/products${sendDataSearch}`);
  }, [sendDataSearch]);

  return (
    <globalContext.Provider
      value={{
        currentData: [data, setData],
        inputSearch: [search, setSearch],
        dataSearch: [sendDataSearch, setSendDataSearch],
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Context;
