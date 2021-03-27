import React from "react";
import styles from "../homePage/HomePage.module.css";

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Home,sweet home...
      <span role="img" aria-label="Home">
        🏡
      </span>
    </h1>
  </div>
);

export default HomePage;
