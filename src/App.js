import './App.css';
import MapView from './components/MapView';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100vw'}}>
      <div>
        <MapView></MapView>
      </div>
      <div>
        <SearchBox></SearchBox>
      </div>
    </div>
  );
}

export default App;
