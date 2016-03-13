import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

const propTypes =
  { lat: PropTypes.number.isRequired
  , lng: PropTypes.number.isRequired
  };

const GoogleCityMap = ({lat, lng}) => {
  return (
    <GoogleMapLoader
      containerElement={
        <div
          style={{
            height: '100%'
          }}
        />
      }
      googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat, lng}}
          />
      }
    />
  )
}

GoogleCityMap.propTypes = propTypes;

export default GoogleCityMap;
