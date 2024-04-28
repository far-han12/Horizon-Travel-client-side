import React, { useEffect, useState } from 'react';
import TouristCard from './TouristCard';

const TouristSpot = () => {
    const[spot,setspot]=useState([])
    const [datalength,setdatalength]=useState(6)
    useEffect(() => {
        fetch("http://localhost:5000/tourist")
          .then(res => res.json())
          .then(data=> setspot(data))
      },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                spot.slice(0,datalength).map((s,p)=> <TouristCard key={p} s={s}></TouristCard>)
            
            }</div>
        </div>
    );
};

export default TouristSpot;