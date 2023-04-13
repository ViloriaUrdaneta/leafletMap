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



const SearchBox = () => {

    const [searchText, setSearchText] = useState('');

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
                        
                    }}>
                        Search
                    </Button>
                </div>
            </div>
            <div>
            <List>
                {
                    [1, 2, 3, 4, 5].map((item) => {
                        return (
                            <div key={ item }>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    <img src={ pointer } alt='pointer' style={{ width: 38, height: 38 }}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
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
