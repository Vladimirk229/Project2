import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './CountryList.jsx';
import CountryDetails from './CountryDetails.jsx';

//============================

function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  //============================
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,tld,currencies')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Error:', err));
  }, []);

  //============================
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  //============================
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Router basename="/PS_Project1">
        <header style={{ padding: '10px 20px' }}>
          <button onClick={toggleTheme} aria-label="Toggle dark or light theme">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <Routes>
          <Route path="/" element={<CountryList countries={countries} />} />
          <Route path="/country/:name" element={<CountryDetails countries={countries} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
