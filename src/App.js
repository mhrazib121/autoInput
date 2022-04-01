import logo from './logo.svg';
import { Country, State, City } from 'country-state-city';
import './App.css';
import { useState } from 'react';
import CountriesDetails from './CountriesDetails/CountriesDetails';
import AirportInput from './AirportInput/AirportInput';

function App() {
  return (
    <div>
      <div>
        <CountriesDetails/>
        {/* <AirportInput/> */}
      </div>
    </div>
  );
}

export default App;
