import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-dark bg-primary">
          5 Day Weather Forecast
        </nav>
        <div style={{padding: '3rem 1.5rem'}}>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    )
  }
}

export default App;
