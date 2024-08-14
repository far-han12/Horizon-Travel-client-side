import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TouristCard from './TouristCard';

const CountrySpots = () => {
  const { country_Name } = useParams();
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`https://react-tourism-server.vercel.app/spot/bycountry/${country_Name}`)
      .then(res => res.json())
      .then(data=> setSpots(data))
  },[country_Name])
  return (
    <div>
      <h1>hi</h1>
      {spots.map((s, p) => (
                  <div key={p} className="  p-4  transform transition duration-500 hover:scale-105">
                    <TouristCard s={s} />
                  </div>
                ))}
    </div>
  );
};

export default CountrySpots;