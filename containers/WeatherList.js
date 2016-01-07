import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLineChart from '../components/SparkLineChart';

class WeatherList extends Component {

  renderCityWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><SparkLineChart data={temps} color="red" units="K" /></td>
        <td><SparkLineChart data={pressures} color="blue" units="hPa"/></td>
        <td><SparkLineChart data={humidities} color="orange" units="%"/></td>
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
            <th>Temperature (K)</th>
            <th>Pressure(hPA)</th>
            <th>Humidity(%)</th>
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
