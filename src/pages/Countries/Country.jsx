import React from "react";
import styles from "./Countries.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../../data/data.json";
import CardCountries from "../../components/CardCountries/CardCountries";

import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Country = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { id } = useParams();

  const country = data.filter((item) => item.numericCode.includes(id));
  console.log(country);

  return (
    <div
      className={`${styles.cardCountry} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      {country.map((item) => (
        <div className={styles.cardDetails}>
          <Link
            to="/"
            className={`${styles.btn} ${
              isDarkMode ? styles.darkbtn : styles.lightbtn
            }`}
          >
            {" "}
            <FaLongArrowAltLeft size={20} /> Back
          </Link>
          <CardCountries country={item} overview={true} />
        </div>
      ))}
    </div>
  );
};

export default Country;
