import React, { Component, PropTypes } from 'react';
import SparkLineChart from './SparkLineChart';
import GoogleCityMap from './GoogleCityMap';

const propTypes =
  { cityData: PropTypes.shape(
    { pressure_data: PropTypes.arrayOf(PropTypes.number)
    , humidity_data: PropTypes.arrayOf(PropTypes.number)
    , temp_f_data: PropTypes.arrayOf(PropTypes.number)
    , temp_f_avg: PropTypes.number
    , pressure_avg: PropTypes.number
    , humidity_avg: PropTypes.number
    }).isRequired
    , deleteCity: PropTypes.func
  };

const WeatherListItem = ({cityData, deleteCity}) => {
  const
    { pressure_data
    , humidity_data
    , temp_f_data
    , temp_f_avg
    , humidity_avg
    , pressure_avg
    } = cityData;

  const { lat, lng } = cityData.city.coord;

  return (
    <tr>
      <td className="googlemap">
        <GoogleCityMap lat={lat} lng={lng} />
      </td>
      <td>
        <SparkLineChart data={temp_f_data} color="red" avgData={temp_f_avg}un its="&deg;F" />
      </td>
      <td>
        <SparkLineChart data={pressure_data} color="blue" avgData={pressure_avg}units="hPa"/>
      </td>
      <td>
        <SparkLineChart data={humidity_data} color="orange" avgData={humidity_avg} units="%"/>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteCity(cityData.city.id)}>
          X
        </button>
      </td>
    </tr>
  )
};

WeatherListItem.propTypes = propTypes;

export default WeatherListItem;
