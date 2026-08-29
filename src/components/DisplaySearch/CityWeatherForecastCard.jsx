import React from 'react';

function CityWeatherForecastCard() {
  return (
    <div className="forecastCard">
      <div className="forecastCardIcon">
        <div className="forecast-date">
          <p>13:00</p>
        </div>
        <div
          className="forecast-icon"
          style={{
            backgroundImage: `url(https://openweathermap.org/img/wn/10d@2x.png)`,
          }}
        ></div>
        <div className="forecast-temp">27&deg;</div>
      </div>
      <div className="forecastDescription">
        <div>
          <p>Broken Clouds</p>
        </div>
        <div>
          <p>2015/12/04</p>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherForecastCard;
