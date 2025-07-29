import React from 'react';
import { useParams, Link } from 'react-router-dom';

//============================

function CountryDetails({ countries }) {
  const { name } = useParams();
  const country = countries.find(c => c.name.common === name);

  if (!country) return <p>Country not found</p>;

  //============================
  //All information about the country in html
  return (
    <div className="details-container" aria-label="Country details">
      <Link to="/" className="back-button" aria-label="Go back to country list">← Back</Link>
      <div className="details-content">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="details-flag"
        />
        <div className="details-text">
          <h2>{country.name.common}</h2>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Top Level Domain:</strong> {country.tld?.[0] || 'N/A'}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
