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
            <h2 className='text-center my-5'>Embark on a journey to explore breathtaking landscapes, vibrant cultures, and hidden gems in some of the world's most captivating destinations.</h2>

            <div className='mb-5 flex justify-start md:justify-center md:items-center lg:justify-center lg:items-center'>
            <details className="dropdown dropdown-right">
  <summary className="m-1 btn text-black bg-cyan-200">Sort</summary>
  <ul className="p-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>High Cost</a></li>
    <li><a>Low Cost</a></li>
  </ul>
</details>
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