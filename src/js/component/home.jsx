import React, { useState } from 'react';
import '/workspaces/AudreyShelton92-TrafficLight/src/styles/index.css';

function App() {
  const [lightOn, setLightOn] = useState('');
  const onClick = (color) => { setLightOn(color); };

  return (
    <div>
      <div className="traffic-light-container">
        <div className="traffic-light">
          <div
            className={`red light ${lightOn === 'red' ? 'glowred' : ''}`}
            onClick={() => onClick('red')}
          ></div>
          <div
            className={`yellow light ${lightOn === 'yellow' ? 'glowyellow' : ''}`}
            onClick={() => onClick('yellow')}
          ></div>
          <div
            className={`green light ${lightOn === 'green' ? 'glowgreen' : ''}`}
            onClick={() => onClick('green')}
          ></div>
        </div>
        
        <div className="pole"></div>
      </div>
    </div>
  );
}

export default App;

