import React from "react";
import styles from "./CardCountries.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const CardCountries = ({ country, overview = false }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${styles.card} ${isDarkMode ? styles.dark : styles.light}`}
      >
        <div className={styles.image}>
          <img src={country.flags.svg} alt=" country " />
        </div>
        <div className={styles.content}>
          <h2>{country.name}</h2>
          <div>
            <h4>
              Population:
              <span>{country.population}</span>
            </h4>
          </div>
          <div>
            <h4>
              Region:
              <span>{country.region}</span>
            </h4>
          </div>

          {overview && (
            <div>
              <h4>
                Sub Region: <span>{country.subregion}</span>
              </h4>
            </div>
          )}

          <div>
            <h4>
              Capital:
              <span>{country.capital}</span>
            </h4>
          </div>
        </div>
        {overview && (
          <div>
            <div>
              <div>
                <h4>
                  Top Level Domain:
                  <span>{country.topLevelDomain}</span>
                </h4>
              </div>
              <div>
                <h4>
                  Currencies:
                  <span>{country.currencies.name}</span>
                </h4>
              </div>
              <div>
                <h4>
                  Languages:
                  <span>
                    {country.languages.map((language) => (
                      <div key={language.numericCode}>{language.name}</div>
                    ))}
                  </span>
                </h4>
              </div>
            </div>
            <div>
              <h3>Border Countries:</h3>
              <div>
                {" "}
                {country.borders &&
                  country.borders.map((item) => <span>{item}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardCountries;
