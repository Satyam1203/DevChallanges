import React, {useState} from 'react';
import './App.css';

import DisplayButtons from './components/DisplayButtons';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  const [design, setDesign] = useState(`Buttons`);
  return (
    <>
      <div className="App">
        <Navigation changeDesign={setDesign}/>
        {
          design === 'Buttons' ? 
          <DisplayButtons /> : 
          <div style={{width: '100%', marginTop: '10px'}}>No styles present</div>
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
