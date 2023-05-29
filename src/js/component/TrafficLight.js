import React, { useState, useEffect } from 'react';
import './styles/TrafficLight.css';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');
  const [automaticMode, setAutomaticMode] = useState(false);

  const changeLight = () => {
    if (activeLight === 'red') {
      setActiveLight('yellow');
    } else if (activeLight === 'yellow') {
      setActiveLight('green');
    } else if (activeLight === 'green') {
      setActiveLight('red');
    }
  };

  const toggleAutomaticMode = () => {
    setAutomaticMode(!automaticMode);
  };

  useEffect(() => {
    let intervalId;

    if (automaticMode) {
      intervalId = setInterval(() => {
        changeLight();
      }, 2000); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [automaticMode]);

  return (
    
    <div>
        <div className='tittle'>
            <h1>Traffic Light with React</h1>
        </div>
      <div className="traffic-light">
        <div
          className={`light red ${activeLight === 'red' ? 'active' : ''}`}
          onClick={changeLight}
        ></div>
        <div
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
          onClick={changeLight}
        ></div>
        <div
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}
          onClick={changeLight}
        ></div>
      </div>
      <button onClick={toggleAutomaticMode}>
        {automaticMode ? 'Botón Manual' : 'Botón Automático'}
      </button>
    </div>
  );
};

export default TrafficLight;
