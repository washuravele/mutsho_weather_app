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
    backgroundImg: '',
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  };
  componentDidMount() {
    this.getHeroBackgroundImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
      if (this.props.lat && this.props.lon) {
        this.getWeather();
      }
    }
  }

  getWeather = async () => {
    try {
      const responesW = await OpenWeather.get('/weather', {
        params: {
          lat: this.props.lat,
          lon: this.props.lon,
        },
      });
      console.log('WEATHER DATA:', responesW.data);

      const responesF = await OpenWeather.get('/forecast', {
        params: {
          lat: this.props.lat,
          lon: this.props.lon,
        },
      });

      console.log('FORECAST DATA:', responesF.data);
      const temp_k = responesW.data.main.temp;
      var temp_c = Math.round(temp_k - 273.15);

      this.setState({
        loc_name: responesW.data.name,
        temp: temp_c,
        weather_icon: responesW.data.weather[0].icon,
        listForecast: responesF.data.list,
      });
    } catch (error) {
      console.log('Weather API error:', error.response?.data);
    }
  };

  getDate() {
    const date = new Date();

    return (
      <p>
        {`${date.toLocaleDateString()}`}
        {'    '}
        <span>{`${this.state.hour}:${this.state.minute}`}</span>{' '}
      </p>
    );
  }

  getHeroBackgroundImage() {
    const heroImgs = [
      'natural-sky.jpg',
      'landscape-sky.jpg',
      'silhouettes-hills.jpg',
      'sunset-sky.jpg',
    ];

    setTimeout(() => {
      this.setState({ backgroundImg: 'natural-sky.jpg' });
    });

    setInterval(() => {
      const random = Math.floor(Math.random() * heroImgs.length);
      this.setState({ backgroundImg: heroImgs[random] });
    }, 30000);
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
              theme={this.props.theme}
            />
            <div className="user-cB  montserrat">
              {this.state.listForecast.slice(1, 7).map((list, i) => (
                <UserForecastData
                  key={i}
                  list={list}
                  theme={this.props.theme}
                />
              ))}
            </div>
          </div>
          <div className="current-date montserrat">{this.getDate()}</div>
        </div>
      );
    }

    if (!this.props.lat && !this.props.lon && this.props.error) {
      return null;
    } else return <div className="ui active centered inline loader"></div>;
  };

  render() {
    /* this.getWeather();**/
    /* this.getHeroBackgroundImage();*/
    return (
      <div
        style={{
          backgroundImage: `url('/Background/${this.state.backgroundImg}')`,
        }}
        className="hero"
      >
        {this.conditionalRender()}
      </div>
    );
  }
}

export default Hero;
