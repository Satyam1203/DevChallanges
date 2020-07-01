import React, {useState} from 'react';
import './App.css';

import DisplayButtons from './components/DisplayButtons';
import DisplayInputs from './components/DisplayInputs';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  const [design, setDesign] = useState(`Inputs`);
  return (
    <>
      <div className="App">
        <Navigation changeDesign={setDesign}/>
        {
          design === 'Buttons' ? 
          <DisplayButtons /> : 
          (
            design === 'Inputs' ?
            <DisplayInputs /> :
            (<div style={{width: '100%', marginTop: '10px'}}>No styles present</div>)
          )
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
