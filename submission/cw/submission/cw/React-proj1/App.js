import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hi from './ObjPerson';
import Myform from './Myform';
import Hello from './EmpDept';
import Todolist from './Todolist';
import Popup from './Popup';
import Child from './Child';

function App() {
  const list = [
    { name: 'ravi', id: '102', profession: 'IT', theme: { color: 'black' } },
    { name: 'hari', id: '104', profession: 'civil', sal: [100,200,300], isfound:true, theme:{color:'white'} },
    { name: 'harish', id: '101', profession: 'IT', sal: [100,200,300], isfound:true, theme:{color:'white'} },
    { name: 'viki', id: '107', profession: 'mech', sal: [100,200,300], isfound:true, theme:{color:'white'} },
    { name: 'rajesh', id: '1034', profession: 'electrical', sal:[100,200,300], isfound:true, theme:{color:'white'} }
  ];

  const [counter, setCounter] = useState(0);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleOpenPopup1 = () => {
    setCounter(prev => prev + 1);
    setShowPopup1(true);
  };

  const handleOpenPopup2 = () => {
    setCounter(prev => prev + 1);
    setShowPopup2(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to react.js</p>
      </header>

      <Todolist />
      <Hi />
      <Hello list={list} />

      <button onClick={handleOpenPopup1}>Open Popup 1</button>
      {showPopup1 && (
        <Popup
          title={`Popup 1 Count: ${counter}`}
          onClose={() => setShowPopup1(false)}
        />
      )}

      <button onClick={handleOpenPopup2}>Open Popup 2</button>
      {showPopup2 && (
        <Popup
          title={`Popup 2 Count: ${counter}`}
          onClose={() => setShowPopup2(false)}
        />
      )}

      <Child
        counter={counter}
        onIncrement={() => setCounter(counter + 1)}
        onDecrement={() => setCounter(counter - 1)}
      />

      <Myform />

      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
