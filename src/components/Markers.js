import React from 'react';
import { Marker, Popup } from 'react-leaflet';
//import { IconLocation } from './IconLocation';
import { Icon } from 'leaflet';
import pointer from '../assets/icon.svg'

const Markers = () => {

    const customIcon = new Icon({
        iconUrl: pointer,
        iconSize: [48, 48],
    })

    const position = [51.528845, -0.172728]

    return (
        <Marker
            position={ position }
            icon={ customIcon }
        >
            <Popup>
                <h2>Hi mom</h2>
            </Popup>
        </Marker>
    );
}

export default Markers;
