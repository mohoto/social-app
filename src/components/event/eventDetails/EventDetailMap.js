import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

function Marker() {
    return(
        <Icon name="marker" size="big" color="red" />
    )
}

export default function EventDetailMap({latLng}) {

    const zomm = 14;

    return (
        <Segment attached style={{padding: 0}}>
            <div style={{width: '100%', height: 300}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCA8E2avmmiIaSORTqCm5AAD7_htjRSbGc' }}
                center={latLng}
                zoom={11}
                >
                    <Marker lat={latLng.lat} lng={latLng.lng} />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}
