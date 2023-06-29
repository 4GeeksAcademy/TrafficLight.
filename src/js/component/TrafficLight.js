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

  //Creo función y asigno el evento "on click" de cada luz, para apagar y encender al hacer click

  const toggleLight = (lightColor) => {
    if (activeLight === lightColor) {
      setActiveLight('');
    } else {
      setActiveLight(lightColor);
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
    //Añado dependencia activeLight en el array para permitir el ciclo automatico
  }, [automaticMode, activeLight]);

  return (

    <div>
      <div className='tittle'>
        <h1 style={{ color: 'purple', fontFamily: 'Arial', fontSize: '2.5rem', textShadow: '2px 2px 4px #000' }}>
          Traffic Light with React
        </h1>
      </div>
      <div className="traffic-light">
        <div
          className={`light red ${activeLight === 'red' ? 'active' : ''}`}
          onClick={() => toggleLight('red')}
        ></div>
        <div
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
          onClick={() => toggleLight('yellow')}
        ></div>
        <div
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}
          onClick={() => toggleLight('green')}
        ></div>
      </div>
      <button
        onClick={toggleAutomaticMode}
        style={{
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          transition: 'background-color 0.3s ease',
          
        }}
      >
        {automaticMode ? 'Botón Manual' : 'Botón Automático'}
      </button>









    </div>
  );
};

export default TrafficLight;
