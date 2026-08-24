import React from 'react';
import OpenWeather from '../../apis/OpenWeather';

class Hero extends React.Component {
  renderWeather = async () => {
    const responed = await OpenWeather.get('/weather', {
      params: {
        lat: this.props.lat,
        lon: this.props.lon,
      },
    });

    console.log(responed);
  };

  conditionalRender = () => {
    if (this.props.lat && this.props.lon) {
      return <h1>good</h1>;
    }

    if (!this.props.lat && !this.props.lon && this.props.error) {
      return <h1>{this.props.error}</h1>;
    } else return <h1>loading</h1>;
  };

  render() {
    return <div>{this.conditionalRender()}</div>;
  }
  
}

export default Hero;
