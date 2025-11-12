import React, { useState, useEffect } from 'react';

function Clock() {
  const [color, setColor] = useState('black');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
    
  };
  return (
    
    <div 
    style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Current Time</h3> 
      
      <button
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {time}
      </button>

      <div style={{ marginTop: '20px' }}>

        <select value={color} onChange={handleColorChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
      </div>


      <p>Selected color: {color}</p>
      
    </div>
  );
}

export default Clock;
