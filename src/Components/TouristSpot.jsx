import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TouristCard from './TouristCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const TouristSpot = () => {
    
    const [spot, setspot] = useState([]);
    const [datalength, setdatalength] = useState(6);

    useEffect(() => {
        fetch("  https://react-tourism-server.vercel.app/tourist")
          .then(res => res.json())
          .then(data => {
            setspot(data.slice(0, datalength)); // Adjust data slice here for initial load
          });
    }, [datalength]); // Ensure dependency array is correct to avoid unnecessary re-renders

    return (
        <div className='m-4 overflow-hidden'>
            <Carousel responsive={responsive} swipeable={true} draggable={true}  infinite={true} >
            {spot.map((s, p) => (
                  <div key={p} className="  p-4  transform transition duration-500 hover:scale-105">
                    <TouristCard s={s} />
                  </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TouristSpot;
