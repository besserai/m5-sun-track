import { useState } from 'react';
import './App.css';
import { Graph } from './components/Graph';
// import Graph3 from './components/archive/Graph3';
import SunPathCalc from './components/SunPathCalc';



function App() {

  const [location, setLoaction] = useState({ "lat": 52.5170365, "lon": 13.3888599 });



  return (
    <div className="App">
      Module M5-sun-path
      <SunPathCalc loc={location} />
      This example shows path profiles for Berlin
    </div >
  );
}

export default App;
