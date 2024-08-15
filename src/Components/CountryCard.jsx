import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CountryCard = () => {
  const [items, setItems] = useState([]);

  const responsive = {
      superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
      },
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
      },
      mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
      }
  };

    useEffect(() => {
        fetch("https://react-tourism-server.vercel.app/country")
          .then(res => res.json())
          .then(data=> setItems(data))
      },[])
    return (
        <div className=' mx-auto overflow-hidden p-4 '>
         <Carousel className='py-4' responsive={responsive} swipeable={true} draggable={true}  infinite={true} >
       {
            items.map((s,p)=>    <div  key={p} className="card transform transition duration-500 bg-base-200 p-4 md:p-0 lg:p-0  hover:scale-105  mx-auto card-compact  md:w-[350px] lg:w-96 h-[600px] ">
            <figure><img className='w-[400px] h-80' src={s.photo} alt="Shoes" /></figure>
            <div className="card-body flex-wrap">
              <h2 className="card-title">{s.country_Name}</h2>
              <p>{s.description}</p>
              <div className="card-actions justify-end">
              <Link to={`/spot/bycountry/${s.country_Name}`} className="btn text-black bg-cyan-400">View Spots</Link>

              </div>
            </div>
          </div>)
        }
        </Carousel>
       </div>
      
    );
};

export default CountryCard;