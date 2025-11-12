import React from 'react';
import './App.css';
export default function Child({ counter, onIncrement, onDecrement }) {
  return (
    <div className="child-counter">
      <button id="incre" onClick={onIncrement}>Increment</button>
      <button id="decre" onClick={onDecrement}>Decrement</button>
      <p>Count = {counter}</p>
    </div>
  );
}
