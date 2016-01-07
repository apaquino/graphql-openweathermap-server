import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearWeather } from '../actions/index';
import SparkLineChart from '../components/SparkLineChart';
import GoogleCityMap from '../components/GoogleCityMap';

class WeatherList extends Component {

  renderCityWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp_f);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lng } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td className="googlemap"><GoogleCityMap lat={lat} lng={lng} /></td>
        <td><SparkLineChart data={temps} color="red" units="&deg;F" /></td>
        <td><SparkLineChart data={pressures} color="blue" units="hPa"/></td>
        <td><SparkLineChart data={humidities} color="orange" units="%"/></td>
      </tr>
    )
  }

  render() {
    const { weather, clearWeather } = this.props;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPA)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
          {weather.cities.map(this.renderCityWeather)}
          </tbody>
        </table>
        {weather.cities.length > 0 && (
          <button
            className="btn btn-warning"
            style={{float: 'right'}}
            onClick={() => clearWeather()}
          >
            {weather.cities.length > 1 ? "Clear All" : "Clear"}  
          </button>
        )}
      </div>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clearWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
