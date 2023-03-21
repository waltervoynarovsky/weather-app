import logo from "./logo.svg";
import "./App.scss";
import Display from "./components/Display/Display";
import SearchBox from "./components/SearchBox/SearchBox";
import React, { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState({
    location: {
      name: null,
      country: null,
    },
    current: {
      temp_c: null,
      condition: {
        text: null,
        icon: null,
      },
    },
  });
  const getCity = async (location) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=33ec813df3124dbc948161134230803&q=London&aqi=yes`;
    if (searchTerm) {
      url = `http://api.weatherapi.com/v1/current.json?key=33ec813df3124dbc948161134230803&q=${location}&aqi=yes`;
    }
    const response = await fetch(url);
    const cityData = await response.json();
    setCity(cityData);
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value;
    setSearchTerm(cleanInput);
    console.log(handleInput);
  };

  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   const cleanInput = event.target.value;
  //   console.log(cleanInput);
  //   setSearchTerm(cleanInput);
  // };

  useEffect(() => {
    getCity(searchTerm);
  }, []);

  return (
    <div className="app">
      <div>
        <SearchBox
          handleInput={handleInput}
          searchTerm={searchTerm}
          // onSubmit={handleSubmit}
        />
      </div>
      <div className="display">
        <Display city={city} />
      </div>
    </div>
  );
}
export default App;
