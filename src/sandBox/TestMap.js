import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import { selectMap } from '../reducers/mapReducer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TestMap() {

    const {city} = useSelector(selectMap);
    console.log('city:', city)

    let defaultProps;

    if(city.latLng) {
        defaultProps =  {
            center: {
                lat: city.latLng.lat,
                lng: city.latLng.lng
                },
            zoom: 11
        }; 
    }
    else {
        defaultProps =  {
            center: {
                lat: '',
                lng: ''
                },
            zoom: 11
        }; 
    }


    return (
      // Important! Always set the container height explicitly
      <>
      {city.latLng ? (
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCA8E2avmmiIaSORTqCm5AAD7_htjRSbGc' }}
              center={defaultProps.center}
              zoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={city.latLng.lat}
                lng={city.latLng.lng}
                text={city.address}
              />
            </GoogleMapReact>
          </div>
      ) : null}
      </>
    );
}
