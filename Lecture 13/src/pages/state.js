// src/pages/state.js
import React, { useState } from 'react';

export default function StatePage() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>State Management Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
