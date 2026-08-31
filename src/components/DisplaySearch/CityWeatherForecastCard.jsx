import React from 'react';

function CityWeatherForecastCard(props) {
  const temp_k = props.temp;
  var temp_c = Math.round(temp_k - 273.15);
  return (
    <div className="  forecastCard">
      <div className="forecastCardIcon">
        <div className="forecast-date">
          <p>{props.date.substr(11, 5)}</p>
        </div>
        <div
          className="forecast-icon"
          style={{
            backgroundImage: `url(https://openweathermap.org/img/wn/${props.icon}@2x.png)`,
          }}
        ></div>
        <div className="forecast-temp">{temp_c}&deg;</div>
      </div>
      <div className="forecastDescription">
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <p>{props.date.substring(0, 10)}</p>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherForecastCard;
