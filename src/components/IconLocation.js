import L from 'leaflet';
import pointer from '../assets/icon.svg';

export const IconLocation = L.icon({
    iconUrl: pointer,
    iconRetinaUrl: require('../assets/icon.svg'),
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
});


