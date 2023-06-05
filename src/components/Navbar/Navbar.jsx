import React from "react";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = ({ handleBg }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav
      className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <h2>Where in the world?</h2>
      <div>
        <span onClick={toggleDarkMode}>
          <HiOutlineMoon
            className={isDarkMode ? styles.darkMoon : styles.ligthMoon}
          />
          Dark Mode
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
