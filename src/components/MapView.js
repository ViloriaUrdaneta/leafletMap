import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Markers from './Markers';

const MapView = () => {
    return (
        <MapContainer 
            center={{lat: '51.5387321', lng: '-74.1715412'}}
            zoom={13}>
            <TileLayer 
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
            </TileLayer>
            <Markers/>
        </MapContainer>
    )
}

export default MapView;
