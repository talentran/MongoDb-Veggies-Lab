import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowSingleVeggie = () => {
  const [veggie, setVeggie] = useState(null);
  const { veggieName } = useParams();

  useEffect(() => {
    const fetchVeggie = async () => {
      const response = await axios.get(`/veggie/${veggieName}`);
      setVeggie(response.data);
    };

    fetchVeggie();
  }, [veggieName]);

  return (
    veggie ? (
      <div>
        <h2>{veggie.name}</h2>
        <p>{veggie.color}</p>
        <p>{veggie.origin}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default ShowSingleVeggie;
