// src/pages/client-side.js
import { useState, useEffect } from 'react';

export default function ClientSide() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await res.json();
      setData(json.slice(0, 50));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Client-Side Data Fetching</h2>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
}
