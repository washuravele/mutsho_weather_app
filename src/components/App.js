import React from 'react';
import NavBar from './NavagationBar/NavBar';
import './App.css';
import Hero from './HeroPage/Hero';
import SearchCity from './SearchInput/SearchCity';
import DisplayWeather from './DisplaySearch/DisplayWeather';

class App extends React.Component {
  state = { lat: null, lon: null, locationError: '', city: '', theme: 'light' };

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
    this.onFormSubmit('');
  }

  onFormSubmit = (city) => {
    this.setState({ city: city });
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    return (
      /*display the navbar  the content*/
      <div className={`app-container-${this.state.theme}  `}>
        <div>
          <NavBar toggleTheme={this.toggleTheme} />
        </div>

        <div className="content">
          <Hero
            lat={this.state.lat}
            lon={this.state.lon}
            error={this.state.locationError}
          />
          <SearchCity formCity={this.onFormSubmit} />
          <DisplayWeather city={this.state.city} />
        </div>
      </div>
    );
  }
}

export default App;
