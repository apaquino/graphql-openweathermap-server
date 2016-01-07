import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderCityWeather(cityData) {
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render() {
    console.log("weatherlist prop", this.props.weather.cities);

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.cities.map(this.renderCityWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);
