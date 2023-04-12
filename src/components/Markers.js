import React from 'react';
import { Marker } from 'react-leaflet';
//import { IconLocation } from './IconLocation';
import { Icon } from 'leaflet';
import pointer from '../assets/icon.svg'

const Markers = () => {

    const customIcon = new Icon({
        iconUrl: pointer,
        iconSize: [35, 35],
    })

    return (
        <Marker
            position={{lat: '51.528845', lng: '-0.172728'}}
            icon={customIcon}
        ></Marker>
    );
}

export default Markers;
