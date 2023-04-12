import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Markers = () => {
    return (
        <Marker
            position={{lat: '51.528845', lng: '-0.172728'}}
            icon={IconLocation}
        ></Marker>
    );
}

export default Markers;
