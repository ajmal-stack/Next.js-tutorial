// src/pages/events.js
import React from 'react';

export default function EventsPage() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <h2>Events Handling Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
