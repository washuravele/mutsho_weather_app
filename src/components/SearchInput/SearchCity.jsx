import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {
  state = { city: '' };

  onInput = (event) => {
    const searchCity = event.target.value;
    this.setState({ city: searchCity });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.formCity(this.state.city);
    this.setState({ city: '' });
  };

  render() {
    return (
      <div class="ui search search-city-c">
        <form onSubmit={this.onFormSubmit}>
          {' '}
          <div class="ui icon input">
            <input
              value={this.state.city}
              style={{
                border: '1px solid rgb(96, 173, 250)',
                boxShadow: '1px 1px 1px 1px rgb(96, 173, 250)',
              }}
              class="prompt"
              type="text"
              placeholder="Search City..."
              onChange={this.onInput}
            />
            <i class="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchCity;
