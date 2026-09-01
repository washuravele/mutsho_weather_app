import React from 'react';

function CityWeather(props) {
  return (
    <div className={`cityWeatherCard-${props.theme}`}>
      <div
        className="cityIcon"
        style={{
          backgroundImage: `url(https://openweathermap.org/img/wn/${props.icon}@2x.png)`,
        }}
      ></div>
      <div>
        <p className="montserrat" style={{ fontWeight: '700' }}>
          {props.temp}&deg;
        </p>
      </div>
      <div>
        <p className="montserrat" style={{ fontWeight: '700' }}>
          {props.main}
        </p>
      </div>
    </div>
  );
}

export default CityWeather;
