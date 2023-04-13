import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Markers from './Markers';

const MapView = () => {

    const position = [51.528845, -0.172728]

    return (
        <MapContainer 
            center={ position } 
            zoom={ 13 }>
            <TileLayer 
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
            </TileLayer>
            <Markers/>
        </MapContainer>
    )
}

export default MapView;
