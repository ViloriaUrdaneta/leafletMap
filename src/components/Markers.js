import React from 'react';
import { Marker, Popup } from 'react-leaflet';
//import { IconLocation } from './IconLocation';
import { Icon } from 'leaflet';
import pointer from '../assets/icon.svg'

const Markers = (props) => {

    const customIcon = new Icon({
        iconUrl: pointer,
        iconSize: [48, 48],
    })

    const {locationSelection} = props;

    const position = [51.528845, -0.172728]

    return (
        <div>
            {locationSelection && (
                <Marker
                    position={ locationSelection }
                    icon={ customIcon }
                >
                    <Popup>
                        <h2>Hi mom</h2>
                    </Popup>
                </Marker>
            )}
        </div>
    );
}

export default Markers;
