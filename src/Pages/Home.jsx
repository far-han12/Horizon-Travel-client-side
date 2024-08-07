import React from 'react';
import NavBar from "../Components/NavBar"
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';
// import OurOffices from '../Components/OurOffices';
// import Location from '../Components/Location/Location';
import TouristSpot from '../Components/TouristSpot';
import Clientreview from '../Components/Clientreview';
import SpecialOffers from '../Components/SpecialOffers';
import CountryCard from '../Components/CountryCard';
import Travelai from '../Components/Travelai';
import { Link } from 'react-router-dom';
import { FaRobot } from "react-icons/fa";
const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='mt-3 mb-10'><NavBar></NavBar></div>
            <div className='mb-10'><Banner></Banner></div>
          
            <div className='my-10'>
                <h2 className='text-center font-bold  lg:text-3xl mb-10'>Tourists Spot</h2>
                <p className='text-center font-light text-xl mb-10'>Whether you're seeking a relaxing beach getaway, an adventurous jungle trek,  or a cultural immersion <br /> in bustling cities, we have the perfect itinerary for you.</p>
                <TouristSpot></TouristSpot>
            </div>
            <div>
                <h2 className='text-center font-bold  lg:text-3xl'>Client Reviews</h2>
                <p className='text-center font-normal text-xl mt-5  mb-10'>Discover why our clients rave about our service and products in their own words.</p>
                <Clientreview></Clientreview>
            </div>
            <div className=' my-10  '>
                <h2 className='text-center mb-5 font-bold lg:text-3xl'>Southeast Asia</h2>
                <p className='text-center mb-8 lg:text-xl'>Southeast Asia is a popular tourist destination, attracting millions of visitors each year</p>
                <CountryCard></CountryCard>
            </div>
            <div>
                <SpecialOffers></SpecialOffers>
            </div>
            <div className='my-10 '>
                <Link className="btn btn-wide mx-auto flex justify-center bg-cyan-400 hover:bg-cyan-600 " to='/travelai'>Explore Our Travel AI <FaRobot></FaRobot> </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;