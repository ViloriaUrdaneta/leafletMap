import './App.css';
import React, { useState } from 'react';
import MapView from './components/MapView';
import SearchBox from './components/SearchBox';

function App() {

  const [selectPosition, setSelectPosition] = useState(null);
  console.log('selectPosition: ', selectPosition)

  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100vw'}}>
      <div>
        <MapView selectPosition={selectPosition}/>
      </div>
      <div>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
  );
}

export default App;