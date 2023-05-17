import React from "react";
import { useEffect, useState, useContext } from "react";
import styles from "./Styles/home.module.css";
import Navbar from "./Navbar";
import { globalContext } from "./Context/Context";

const Home = () => {
  const {data} = useContext(globalContext);
  const [contextData, setData] = data;
  return (
    <div className={styles.container}>
      <Navbar data={contextData}/>
      {contextData.map((item) => console.log(data))}
    </div>
  );
};

export default Home;
