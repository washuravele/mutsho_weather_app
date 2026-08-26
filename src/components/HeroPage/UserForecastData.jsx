import React from 'react';

function UserForecastData(props) {
  var time = props.list.dt_txt;
  const temp_k = props.list.main.temp;
  var temp_c = Math.round(temp_k - 273.15);

  return (
    <div className="forecastContainer">
      <div>{time.substring(11, 16)}</div>
      <div
        className="weather-icon-forecast"
        style={{
          backgroundImage: `url(https://openweathermap.org/img/wn/${props.list.weather[0].icon}@2x.png)`,
        }}
      ></div>
      <div>{temp_c}&deg;</div>
    </div>
  );
}

export default UserForecastData;
