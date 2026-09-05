import React from 'react';
import OpenWeather from '../../apis/OpenWeather';
import CityWeatherForecastCard from './CityWeatherForecastCard';

class CityWeatherForecastData extends React.Component {
  /*  state = { lists: [] };

  getWeather = async () => {
    const responesF = await OpenWeather.get('/forecast', {
      params: {
        q: this.props.city,
      },
    });

    this.setState({ lists: responesF.data.list });
  };*/

  render() {
    /* this.getWeather();*/
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
            Forecast
          </p>
        </div>
        <div className="forecastC">
          {this.props.lists.map((list, i) => {
            while (i > 0 && i < 4) {
              return (
                <CityWeatherForecastCard
                  key={i}
                  description={list.weather[0].description}
                  icon={list.weather[0].icon}
                  date={list.dt_txt}
                  temp={list.main.temp}
                  theme={this.props.theme}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default CityWeatherForecastData;
