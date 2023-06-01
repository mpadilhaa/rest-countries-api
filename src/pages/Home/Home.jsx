import React, { useState } from "react";
import styles from "./Home.module.css";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import CardCountries from "../../components/CardCountries/CardCountries";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
const Home = () => {
  const [country, setCountry] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const results = data.filter((item) =>
    item.name.toLowerCase().includes(country)
  );

  function filterCountries(value) {
    const values = data.filter((item) =>
      item.region.toLowerCase().includes(value)
    );
    setFilteredData(values);
  }

  function handleDetails(value) {
    navigate(`/country/${value}`);
  }

  return (
    <div
      className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.header}>
        <div
          className={` ${styles.inputSearch} ${
            isDarkMode ? styles.darkInput : styles.lightInput
          }`}
        >
          <button>icon</button>
          <input
            type="text"
            placeholder="Search for a country...."
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div
          className={` ${styles.filterRegion} ${
            isDarkMode ? styles.darkInput : styles.lightInput
          }`}
        >
          <button>Filter by region</button>
          <button
            onClick={() => {
              filterCountries("africa");
            }}
          >
            Africa
          </button>
          <button
            onClick={() => {
              filterCountries("america");
            }}
          >
            América
          </button>
          <button
            onClick={() => {
              filterCountries("asia");
            }}
          >
            Asia
          </button>
          <button
            onClick={() => {
              filterCountries("europe");
            }}
          >
            Europa
          </button>
          <button
            onClick={() => {
              filterCountries("oceania");
            }}
          >
            Oceania
          </button>
        </div>
      </div>
      <div>
        <div>
          {filteredData && (
            <div className={styles.listCountry}>
              {filteredData.map((card) => (
                <div
                  onClick={() => {
                    handleDetails(card.numericCode);
                  }}
                >
                  <CardCountries country={card} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {country && (
            <div className={styles.listCountry}>
              {results.map((card) => (
                <div
                  onClick={() => {
                    handleDetails(card.numericCode);
                  }}
                >
                  <CardCountries country={card} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {!country && (
            <div className={styles.listCountry}>
              {data.map((card) => (
                <div
                  onClick={() => {
                    handleDetails(card.numericCode);
                  }}
                >
                  <CardCountries country={card} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
