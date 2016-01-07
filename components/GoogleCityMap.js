import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

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

export default GoogleCityMap;
