import React from 'react';
import OpenWeather from '../../apis/OpenWeather';
import './DisplayWeather.css';
import CityWeather from './CityWeather';
import CityWeatherDescription from './CityWeatherDescription';
import WeatherMessageAlerts from './WeatherMessageAlerts';
import WeatherLoader from './WeatherLoader';
import CityWeatherForecastData from './CityWeatherForecastData';

class DisplayWeather extends React.Component {
  state = {
    main: '',
    icon: '',
    city_name: '',
    country: '',
    description: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    pressure: '',
    weatherError: '',
    list: [],
  };

  getWeather = async () => {
    try {
      const responesW = await OpenWeather.get('/weather', {
        params: {
          q: this.props.city,
        },
      });

      const temp_k = responesW.data.main.temp;
      var temp_c = Math.round(temp_k - 273.15);

      let tempMinC = Math.round(responesW.data.main.temp_min - 273.15);
      let tempMaxC = Math.round(responesW.data.main.temp_max - 273.15);
      let pressureInHg = Math.round(responesW.data.main.pressure * 0.02953);

      this.setState({
        main: responesW.data.weather[0].main,
        icon: responesW.data.weather[0].icon,
        city_name: responesW.data.name,
        country: responesW.data.sys.country,
        description: responesW.data.weather[0].description,
        temp: temp_c,
        tempMin: tempMinC,
        tempMax: tempMaxC,
        pressure: pressureInHg,
        weatherError: '',
      });
    } catch (error) {
      console.log('Weather API error:', error.response?.data);
      this.setState({ weatherError: 'error' });
    }
  };

  conditionalRender = () => {
    if (this.props.city && !this.state.weatherError) {
      return (
        <div className="cityWeatherC">
          <div className={`open`}>
            <div>
              <p
                className="montserrat"
                style={{
                  fontWeight: '700',
                  marginLeft: '40px',
                  color: 'white',
                }}
              >
                Now Weather
              </p>
            </div>
            <div className={`openD-${this.props.theme}`}></div>
          </div>
          <div className="cityWeatherContent">
            <CityWeather
              icon={this.state.icon}
              main={this.state.main}
              temp={this.state.temp}
              theme={this.props.theme}
            />
            <div className="cityWeatherCardB">
              <CityWeatherDescription
                city={this.state.city_name}
                country={this.state.country}
                desc={this.state.description}
                tempMin={this.state.tempMin}
                tempMax={this.state.tempMax}
                pressure={this.state.pressure}
                theme={this.props.theme}
              />
              <CityWeatherForecastData
                theme={this.props.theme}
                city={this.props.city}
              />
            </div>
          </div>
        </div>
      );
    }
    if (!this.props.city && this.state.weatherError) {
      return (
        <div>
          <WeatherMessageAlerts />
        </div>
      );
    }

    return <WeatherLoader />;
  };
  render() {
    this.getWeather();
    return <div className="cityDisplayC">{this.conditionalRender()}</div>;
  }
}

export default DisplayWeather;
