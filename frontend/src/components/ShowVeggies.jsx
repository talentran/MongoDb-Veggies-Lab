import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../constants/URL';

const ShowVeggies = () => {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    const fetchVeggies = async () => {
      const response = await axios.get(`${BASE_API_URL}/veggies`);
      setVeggies(response.data);
    };

    fetchVeggies();
  }, []);

  return (
    <div>
      {veggies.map((veggie, index) => (
        <div key={index}>
          <h2>{veggie.name}</h2>
          <p>{veggie.color}</p>
          <p>{veggie.origin}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowVeggies;
