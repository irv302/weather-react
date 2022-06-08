import React from "react";
const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <img className="img" src={props.img} alt="" />
            <p className="conditions">conditions: {props.conditions}</p>
            <p className="time">time: {props.time}</p>
        </div>
    )
};

export default WeatherForecast;