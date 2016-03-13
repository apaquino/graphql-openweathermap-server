import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearWeather, deleteCity } from '../actions/index';
import WeatherListItem from '../components/WeatherListItem';

class WeatherList extends Component {
  static propTypes =
    { clearWeather: PropTypes.func
    , deleteCity: PropTypes.func
    , weather: PropTypes.object.isRequired
    };

  render() {
    const { weather, clearWeather, deleteCity } = this.props;
    const hasCities = weather.cities.length > 0,
          hasManyCities = weather.cities.length > 1;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPA)</th>
              <th>Humidity (%)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {weather.cities.map(cityData => {
            return (<WeatherListItem
                      key={cityData.city.id}
                      cityData={cityData}
                      deleteCity={deleteCity}
                    />)
          })}
          </tbody>
        </table>
        {hasCities && (
          <button
            className="btn btn-warning"
            style={{float: 'right'}}
            onClick={() => clearWeather()}
          >
            {hasManyCities ? "Clear All" : "Clear"}
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
  return bindActionCreators({clearWeather, deleteCity}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
