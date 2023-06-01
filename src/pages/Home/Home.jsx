import React, { useState } from "react";
import styles from "./Home.module.css";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [country, setCountry] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

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
  console.log(filteredData);
  console.log(results);

  console.log(country);
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.inputSearch}>
          <button>icon</button>
          <input
            type="text"
            placeholder="Search for a country...."
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className={styles.filterRegion}>
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
      {filteredData && (
        <div>
          {filteredData.map((card) => (
            <div
              onClick={() => {
                handleDetails(card.numericCode);
              }}
            >
              <div>
                <img src={card.flags.svg} alt=" country " />
              </div>
              <div>
                <h3>{card.name}</h3>
                <h4>
                  Population:<p>{card.population}</p>
                </h4>
                <h4>
                  Region:<p>{card.region}</p>
                </h4>
                <h4>
                  Capital:<p>{card.capital}</p>
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {country && (
        <div>
          {results.map((card) => (
            <div>
              <div>
                <img src={card.flags.svg} alt=" country " />
              </div>
              <div>
                <h3>{card.name}</h3>
                <h4>
                  Population:<p>{card.population}</p>
                </h4>
                <h4>
                  Region:<p>{card.region}</p>
                </h4>
                <h4>
                  Capital:<p>{card.capital}</p>
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
      {!country && (
        <div>
          {data.map((card) => (
            <div>
              <div>
                <img src={card.flags.svg} alt=" country " />
              </div>
              <div>
                <h3>{card.name}</h3>
                <h4>
                  Population:<p>{card.population}</p>
                </h4>
                <h4>
                  Region:<p>{card.region}</p>
                </h4>
                <h4>
                  Capital:<p>{card.capital}</p>
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
