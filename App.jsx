import React, { useEffect, useState } from 'react';

function App() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/names')
      .then(res => res.json())
      .then(data => {
        setNames(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching names:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Names List</h1>
      <ul>
        {names.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;