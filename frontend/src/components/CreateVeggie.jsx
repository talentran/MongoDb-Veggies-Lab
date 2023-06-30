import React, { useState } from 'react';
import axios from 'axios';

const CreateVeggie = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newVeggie = {
      name,
      color,
      origin,
    };
    await axios.post('/create_veggie', newVeggie);
    setName('');
    setColor('');
    setOrigin('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Color:
        <input type="text" value={color} onChange={e => setColor(e.target.value)} />
      </label>
      <label>
        Origin:
        <input type="text" value={origin} onChange={e => setOrigin(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateVeggie;
