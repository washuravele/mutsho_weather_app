import React from 'react';
import OpenWeather from '../../apis/OpenWeather';
import './DisplayWeather.css';
import CityWeather from './CityWeather';
import CityWeatherDescription from './CityWeatherDescription';

class DisplayWeather extends React.Component {
  state = {
    main: '',
    icon: '',
    city_name: '',
    country: '',
    description: '',
    temp: '',
    weatherError: '',
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

      this.setState({
        main: responesW.data.weather[0].main,
        icon: responesW.data.weather[0].icon,
        city_name: responesW.data.name,
        country: responesW.data.sys.country,
        description: responesW.data.weather[0].description,
        temp: temp_c,
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
        <div className="gradient-background cityWeatherC">
          <div className="open">
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
            <div className="openD"></div>
          </div>
          <div className="cityWeatherContent">
            <CityWeather
              icon={this.state.icon}
              main={this.state.main}
              temp={this.state.temp}
            />
            <div className="cityWeatherCardB">
              <CityWeatherDescription
                city={this.state.city_name}
                country={this.state.country}
                desc={this.state.description}
              />
            </div>
          </div>
        </div>
      );
    }
    if (!this.props.city && this.state.weatherError) {
      return <div>show show</div>;
    }

    return <h1>loading</h1>;
  };
  render() {
    this.getWeather();
    return <div className="cityDisplayC">{this.conditionalRender()}</div>;
  }
}

export default DisplayWeather;
