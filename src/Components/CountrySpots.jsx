import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TouristCard from './TouristCard';
import NavBar from './NavBar';
import { AuthContext } from '../AuthProvider/AuthProvider';
const CountrySpots = () => {
  const { country_Name } = useParams();
  const [spot, setspot] = useState([]);
  const {loading}= useContext(AuthContext)
  useEffect(() => {
    fetch(`https://react-tourism-server.vercel.app/spot/bycountry/${country_Name}`)
      .then(res => {
        if (res.status === 404) {
          throw new Error('No tourist spots found for this country.');
        }
        return res.json();
      })
      .then(data => setspot(data))
      .catch(error => {
        console.error('Error fetching spots:', error);
        // setErrorMessage(error.message); // Add state to handle error messages
      });
  }, [country_Name]);
  
  if (loading) {
    return <div className=' fixed left-1/2 top-1/2  flex justify-center items-center '><div className="w-16 h-16 border-4 border-dashed  rounded-full animate-spin border-cyan-600 dark:border-cyan-600"></div></div>
  }
  return (
    <div>
    <NavBar />
    <h1 className='font-bold text-center my-4 text-xl md:text-3xl lg:text-4xl'>Tourists Spots in {country_Name}</h1>
    {spot.length === 0 ? (
      <p className='text-center text-gray-500'>No tourist spots found for this country.</p>
    ) : (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {spot.map((s, p) => (
          <div key={p} className="transform transition duration-500 hover:scale-105 p-4">
            <TouristCard s={s} />
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default CountrySpots;