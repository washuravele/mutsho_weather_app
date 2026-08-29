import React from 'react';
import CityWeatherForecastCard from './CityWeatherForecastCard';

class CityWeatherForecastData extends React.Component {
  state = {};

  render() {
    console.log(this.props.list);
    return (
      <div className="forecastData">
        <div>
          <p
            className="montserrat"
            style={{
              fontWeight: '700',
              marginLeft: '5px',
              color: 'white',
            }}
          >
            5 Day Forecast
          </p>
        </div>

        <div className="forecastC">
          <div className="arrowLeft">
            <i class="chevron left icon"></i>
          </div>
          <CityWeatherForecastCard />
          <CityWeatherForecastCard />
          <CityWeatherForecastCard />

          <div className="arrowRight">
            <i class="chevron right icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CityWeatherForecastData;
