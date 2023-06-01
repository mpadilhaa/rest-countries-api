import React from "react";
import styles from "./Countries.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../../data/data.json";

const Country = () => {
  const { id } = useParams();

  const country = data.filter((item) => item.numericCode.includes(id));
  console.log(country);

  return (
    <div className={styles.cardCountries}>
      <Link to="/">Back</Link>
      {country.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Country;
