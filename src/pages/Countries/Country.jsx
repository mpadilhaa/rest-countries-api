import React from "react";
import styles from "./Countries.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../../data/data.json";
import CardCountries from "../../components/CardCountries/CardCountries";

import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
const Country = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { id } = useParams();

  const country = data.filter((item) => item.numericCode.includes(id));
  console.log(country);

  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
      <Link to="/">Back</Link>
      {country.map((item) => (
        <CardCountries country={item} overview={true} />
      ))}
    </div>
  );
};

export default Country;
