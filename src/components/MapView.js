import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Markers from './Markers';

const MapView = (props) => {

    const position = [51.528845, -0.172728]
    const { selectPosition } = props;
    const locationSelection = selectPosition? [selectPosition?.lat, selectPosition?.lon] : null;


    
    function ResetCenterView(props){
        const { selectPosition } = props;
        const map = useMap();

        useEffect(() => {
            if(selectPosition && selectPosition.lat && selectPosition.lon){
                map.setView(
                    L.latLng(selectPosition?.lat, selectPosition?.lon),
                    map.getZoom(),
                    {
                        animate: true
                    }
                )
            }
        }, [selectPosition]);
        
        return null;  
    }
    

    return (
        <MapContainer 
            center={ position } 
            zoom={ 13 }>
            <TileLayer 
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
            </TileLayer>
            <Markers locationSelection={locationSelection} />
            <ResetCenterView selectPosition={selectPosition} />
        </MapContainer>
    )
}

export default MapView;
