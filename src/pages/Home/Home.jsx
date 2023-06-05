import React, { useState } from "react";
import styles from "./Home.module.css";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import CardCountries from "../../components/CardCountries/CardCountries";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [country, setCountry] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [displayFilter, setDisplayFilter] = useState(false);
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
    setDisplayFilter(false);
  }

  function inputSearch(e) {
    setFilteredData([]);
    setCountry(e.target.value);
  }

  function showDisplayFilter() {
    setDisplayFilter(!displayFilter);
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
          <span>
            <BiSearchAlt2 />
          </span>
          <input
            type="text"
            placeholder="Search for a country...."
            onChange={inputSearch}
          />
        </div>
        <div
          className={` ${styles.filterRegion} ${
            isDarkMode ? styles.darkInput : styles.lightInput
          }`}
        >
          <span
            onClick={showDisplayFilter}
            className={` ${styles.showFilter} ${
              isDarkMode ? styles.darkFilter : styles.lightFilter
            }`}
          >
            Filter by region
            <IoIosArrowDown size={20} />
          </span>

          <div
            className={` ${styles.listFilterContainer} ${
              isDarkMode ? styles.darkFilter : styles.lightFilter
            }`}
          >
            {displayFilter && (
              <div
                className={` ${styles.listFilter} ${
                  isDarkMode ? styles.darkInput : styles.lightInput
                }`}
              >
                <span
                  onClick={() => {
                    filterCountries("africa");
                  }}
                  className={isDarkMode ? styles.darkInput : styles.lightInput}
                >
                  Africa
                </span>
                <span
                  onClick={() => {
                    filterCountries("america");
                  }}
                  className={isDarkMode ? styles.darkInput : styles.lightInput}
                >
                  América
                </span>
                <span
                  onClick={() => {
                    filterCountries("asia");
                  }}
                  className={isDarkMode ? styles.darkInput : styles.lightInput}
                >
                  Asia
                </span>
                <span
                  onClick={() => {
                    filterCountries("europe");
                  }}
                  className={isDarkMode ? styles.darkInput : styles.lightInput}
                >
                  Europa
                </span>
                <span
                  onClick={() => {
                    filterCountries("oceania");
                  }}
                  className={isDarkMode ? styles.darkInput : styles.lightInput}
                >
                  Oceania
                </span>
              </div>
            )}
          </div>
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
