import React from "react";
import "./styles.css";

import WeatherForecast from "./weatherforecast";
import weatherData from "./weatherdata";

export default function App() {
const forecast =weatherData.map((ele, index) => {
  return <WeatherForecast {...ele} key={index} />

});


  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
<section className="weather">{forecast}</section>
    </div>
  );
}
