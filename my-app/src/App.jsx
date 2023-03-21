import "./App.scss";
import Display from "./components/Display/Display";
import SearchBox from "./components/SearchBox/SearchBox";
import React, { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("London");
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
  const getCity = async () => {
    let url = `http://api.weatherapi.com/v1/current.json?key=33ec813df3124dbc948161134230803&q=${location}&aqi=yes`;
    const response = await fetch(url);
    const cityData = await response.json();
    setCity(cityData);
  };

  const handleInput = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
    console.log(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(location);
    setLocation(searchTerm);
    setSearchTerm(" ");
  };

  useEffect(() => {
    getCity();
  }, [location]);

  return (
    <div className="app">
      <div>
        <SearchBox
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="display">
        <Display city={city} />
      </div>
    </div>
  );
}
export default App;
