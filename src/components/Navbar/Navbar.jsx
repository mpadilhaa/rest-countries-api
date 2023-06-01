import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>Where in the world?</h2>
      <div>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
