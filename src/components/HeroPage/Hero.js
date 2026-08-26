import React from 'react';
import OpenWeather from '../../apis/OpenWeather';
import './Hero.css';
import UserLocationWeather from './UserLocationWeather';
import UserForecastData from './UserForecastData';

class Hero extends React.Component {
  state = {
    loc_name: '',
    temp: null,
    weather_icon: '',
    listForecast: [],
  };

  getWeather = async () => {
    try {
      const responesW = await OpenWeather.get('/weather', {
        params: {
          lat: this.props.lat,
          lon: this.props.lon,
        },
      });

      const responesF = await OpenWeather.get('/forecast', {
        params: {
          lat: this.props.lat,
          lon: this.props.lon,
        },
      });

      const temp_k = responesW.data.main.temp;
      var temp_c = Math.round(temp_k - 273.15);

      this.setState({
        loc_name: responesW.data.name,
        temp: temp_c,
        weather_icon: responesW.data.weather[0].icon,
      });

      this.setState({ listForecast: responesF.data.list });
    } catch (error) {
      console.log('Weather API error:', error.response?.data);
    }
  };

  getDate() {
    const date = new Date().toUTCString();
    return <p>{date}</p>;
  }

  conditionalRender = () => {
    if (this.props.lat && this.props.lon) {
      return (
        <div>
          <div className="user-container">
            <UserLocationWeather
              name={this.state.loc_name}
              temp={this.state.temp}
              icon={this.state.weather_icon}
            />
            <div className="user-cB  montserrat">
              {this.state.listForecast.map((list, i) => {
                while (i > 0 && i < 7) {
                  return <UserForecastData key={i} list={list} />;
                }
                return null;
              })}
            </div>
          </div>
          <div className="current-date montserrat">{this.getDate()}</div>
        </div>
      );
    }

    if (!this.props.lat && !this.props.lon && this.props.error) {
      return null;
    } else return <div class="ui active centered inline loader"></div>;
  };

  render() {
    this.getWeather();
    return <div className="hero">{this.conditionalRender()}</div>;
  }
}

export default Hero;
