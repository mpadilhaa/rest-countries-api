import React from "react";
import styles from "./CardCountries.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const CardCountries = ({ country, overview = false }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={overview ? styles.Countries : ""}>
      <div
        className={`${!overview ? styles.card : styles.cardCountry} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={!overview ? styles.image : styles.imageCountry}>
          <img src={country.flags.svg} alt=" country " />
        </div>
        <div className={!overview ? styles.content : styles.contentCountry}>
          <h2>{country.name}</h2>
          <div className={styles.contentCountryColumns}>
            <div className={styles.primaryColumn}>
              {overview && (
                <div>
                  <h4>
                    Native Name: <p>{country.nativeName}</p>
                  </h4>
                </div>
              )}
              <div>
                <h4>
                  Population:
                  <p>{country.population.toLocaleString("pt-BR")}</p>
                </h4>
              </div>
              <div>
                <h4>
                  Region:
                  <p>{country.region}</p>
                </h4>
              </div>

              {overview && (
                <div>
                  <h4>
                    Sub Region: <p>{country.subregion}</p>
                  </h4>
                </div>
              )}

              <div>
                <h4>
                  Capital:
                  <p>{country.capital}</p>
                </h4>
              </div>
            </div>
            {overview && (
              <div className={styles.secondColumn}>
                <div>
                  <h4>
                    Top Level Domain:
                    <p>{country.topLevelDomain}</p>
                  </h4>
                </div>
                <div>
                  <h4>
                    Currencies:
                    <p>{country.currencies.name}</p>
                  </h4>
                </div>
                <div>
                  <h4>
                    Languages:
                    <p className={styles.languageStyles}>
                      {country.languages.map((language) => (
                        <div key={language.numericCode}>{language.name}</div>
                      ))}
                    </p>
                  </h4>
                </div>
              </div>
            )}
          </div>

          {overview && (
            <div className={styles.thirdColumn}>
              <h3>Border Countries:</h3>
              <div className={styles.borderCountries}>
                {" "}
                {country.borders &&
                  country.borders.map((item) => (
                    <p className={isDarkMode ? styles.dark : styles.light}>
                      {item.toLowerCase()}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCountries;
