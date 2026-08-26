import React from 'react';
import NavBar from './NavagationBar/NavBar';
import './App.css';
import Hero from './HeroPage/Hero';

class App extends React.Component {
  state = { lat: null, lon: null, locationError: '' };

  /*get the user location*/
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ locationError: err.message });
      }
    );
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <NavBar />
        </div>

        <div className="content">
          <Hero
            lat={this.state.lat}
            lon={this.state.lon}
            error={this.state.locationError}
          />
        </div>
      </div>
    );
  }
}

export default App;
