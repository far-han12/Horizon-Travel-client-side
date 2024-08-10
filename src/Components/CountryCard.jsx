import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountryCard = () => {
    const[items,setitem]=useState([])
 
    // const handleList = e =>{
    //     fetch(`https://react-tourism-server.vercel.app/findcountry/${country_Name}`)
    //       .then(res => res.json())
    //       .then(data => console.log(data))
    // }

    useEffect(() => {
        fetch("https://react-tourism-server.vercel.app/country")
          .then(res => res.json())
          .then(data=> setitem(data))
      },[])
      
    return (
        <div className=' mx-auto '>
       <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
       {
            items.map((s,p)=>    <div  key={p} className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[400px] h-80' src={s.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{s.country_Name}</h2>
              <p>{s.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/spotlist/${s._id}`}  className="btn text-black bg-cyan-400">View Spots</Link>
              </div>
            </div>
          </div>)
        }
       </div>
        </div>
    );
};

export default CountryCard;