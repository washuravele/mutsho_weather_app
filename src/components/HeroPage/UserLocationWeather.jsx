import React from 'react';
import './Hero.css';

function UserLocationWeather(props) {
  return (
    <div className="user-cA  montserrat">
      <div className="user-location">
        <div className="user-date">
          <p>Now</p>
        </div>
        <div className="user-location-name">
          {' '}
          <p>{props.name}</p>
        </div>
      </div>
      <div className="user-icon-weather">
        <div
          className="weather-icon"
          style={{
            backgroundImage: `url(https://openweathermap.org/img/wn/${props.icon}@2x.png)`,
          }}
        ></div>
        <div className="temp ">
          {props.temp}&deg;{' '}
          <span style={{ color: 'rgb(96, 173, 250)' }}>c</span>
        </div>
      </div>
    </div>
  );
}

export default UserLocationWeather;
