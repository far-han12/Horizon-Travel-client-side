import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from '../Components/TouristCard';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Filter from '../Components/Filter';
import axios from 'axios';
const Alltourists = () => {
    // const spots = useLoaderData()
    // console.log(spots);
    const [spots,setSpots]= useState([])
    useEffect(() => {
        fetchSpots();
      }, []);
    
      const fetchSpots = (minPrice = '', maxPrice = '') => {
        let query = '';
        if (minPrice) query += `minPrice=${minPrice}&`;
        if (maxPrice) query += `maxPrice=${maxPrice}&`;
    
        axios.get(`https://react-tourism-server.vercel.app/tourist?${query}`)
          .then(response =>
            {
             setSpots(response.data)})
          
          .catch(error => console.error(error));
      };
    return (
      <div>
        <div className='   mx-auto'>
            <NavBar></NavBar>
            <h2 className='text-center my-5'>Embark on a journey to explore breathtaking landscapes, vibrant cultures, and hidden gems in some of the world's most captivating destinations.</h2>

            <div className='mb-5 flex justify-start md:justify-center md:items-center lg:justify-center lg:items-center'>
            <Filter  onFilter={fetchSpots} ></Filter> 
               </div>     
            </div>
         <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
                spots.map((s,q)=> <TouristCard key={q} s={s}></TouristCard>)
            }
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Alltourists;