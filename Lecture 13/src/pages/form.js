// src/pages/form.js
import React, { useState } from 'react';

export default function FormPage() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <div>
      <h2>Form Submission Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
