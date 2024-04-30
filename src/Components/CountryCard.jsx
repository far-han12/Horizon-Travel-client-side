import React, { useEffect, useState } from 'react';

const CountryCard = () => {
    const[items,setitem]=useState([])
 
    useEffect(() => {
        fetch("http://localhost:5000/country")
          .then(res => res.json())
          .then(data=> setitem(data))
      },[])
    return (
        <div className=' mx-auto '>
       <div className='grid gap-4 lg:grid-cols-3'>
       {
            items.map((s,p)=>    <div key={p} className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[400px] h-80' src={s.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{s.country_Name}</h2>
              <p>{s.description}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-cyan-400">View Spots</button>
              </div>
            </div>
          </div>)
        }
       </div>
        </div>
    );
};

export default CountryCard;