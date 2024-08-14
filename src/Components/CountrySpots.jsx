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
      
     {spot.map((s, p) => (
                    <TouristCard s={s} key={p} />
                 
                ))}
    </div>
  );
};

export default CountrySpots;