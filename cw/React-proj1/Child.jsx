import React from 'react';
import './App.css';

export default function Child({ counter, onIncrement, onDecrement }) {
  return (
    <div className="child-counter">
      <p className="counter-display">Count = {counter}</p>
      <div className="button-group">
        <button className="btn increment" onClick={onIncrement}>+</button>
        <button className="btn decrement" onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}
