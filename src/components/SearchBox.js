import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import pointer from '../assets/icon.svg'
import { Divider } from '@mui/material';

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

const SearchBox = (props) => {

    const [searchText, setSearchText] = useState('');
    const [listPlace, setListPlace] = useState([]);
    const { selectPosition, setSelectPosition } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, padding: '10px 20px'}}>
                    <OutlinedInput 
                        style={{ width: '100%' }} 
                        value={ searchText } 
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
                    <Button variant="contained" onClick={() => {
                        const params = {
                            q: searchText,
                            format: 'json',
                            addresdetails: 1,
                            polygon_geojson: 0,
                        };
                        const queryString = new URLSearchParams(params).toString();
                        const requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                            .then((response) => response.text())
                            .then((result) => {
                                console.log(JSON.parse(result));
                                setListPlace(JSON.parse(result));
                            })
                            .catch((err) => console.log('error: ', err));
                    }}>
                        Search
                    </Button>
                </div>
            </div>
            <div>
            <List>
                {
                    listPlace.map((item) => {
                        return (
                            <div key={ item?.place_id }>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => {
                                    setSelectPosition(item);
                                }}>
                                    <ListItemIcon>
                                    <img src={ pointer } alt='pointer' style={{ width: 38, height: 38 }}/>
                                    </ListItemIcon>
                                    <ListItemText primary={ item?.display_name } />
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            </div>
                        )
                    })
                }
            </List>
            </div>
        </div>
    );
}

export default SearchBox;
