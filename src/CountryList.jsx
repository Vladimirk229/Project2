import React from 'react';
import { Link } from 'react-router-dom';

//============================

function CountryList({ countries }) {
  return (
    //Show basic information about all the countries
    <div className="container" aria-label="List of countries">
      {countries.map((country, index) => (
        <Link
          to={`/country/${country.name.common}`}
          key={index}
          className="card"
          aria-label={`View details for ${country.name.common}`}
        >
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="flag"
          />
          <h3>{country.name.common}</h3>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
