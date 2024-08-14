import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TouristCard from './TouristCard';
import NavBar from './NavBar';
const CountrySpots = () => {
  const { country_Name } = useParams();
  const [spot, setspot] = useState([]);
  useEffect(() => {
    fetch(`https://react-tourism-server.vercel.app/spot/bycountry/${country_Name}`)
      .then(res => res.json())
      .then(data=> setspot(data))
  },[country_Name])
  return (
    <div>
      <NavBar></NavBar>
     <h1 className='font-bold text-center my-4 text-xl md:text-3xl lg:text-4xl'>Tourists Spots of {country_Name}</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
     {spot.map((s, p) => (
                  <div key={p} className="transform transition duration-500 hover:scale-105  p-4 ">
                    <TouristCard s={s} />
                  </div>
                ))}
     </div>
    </div>
  );
};

export default CountrySpots;