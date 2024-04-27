import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from '../Components/TouristCard';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Alltourists = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div className='   mx-auto'>
            <NavBar></NavBar>
            <h2>{spots.length}</h2>
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