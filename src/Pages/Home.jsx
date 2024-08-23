import React from 'react';
import NavBar from "../Components/NavBar"
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import OurOffices from '../Components/OurOffices';
// import Location from '../Components/Location/Location';
import TouristSpot from '../Components/TouristSpot';
import Clientreview from '../Components/Clientreview';
import SpecialOffers from '../Components/SpecialOffers';
import CountryCard from '../Components/CountryCard';
import Travelai from '../Components/Travelai';
import { Link } from 'react-router-dom';
import { FaRobot } from "react-icons/fa";
import ReviewForm from '../Components/ReviewForm';
const Home = () => {
    
    return (
        <div>
              <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='mt-3 mb-10'><NavBar></NavBar></div>
            <div className='mb-10'><Banner></Banner></div>
          
            <div  className='my-10 '>
                <h2 className='text-center font-bold text-xl lg:text-3xl mb-10'>Tourists Spot</h2>
                <p className='text-center font-light text-base lg:text-xl mb-10'>Whether you're seeking a relaxing beach getaway, an adventurous jungle trek,  or a cultural immersion <br /> in bustling cities, we have the perfect itinerary for you.</p>
               <div className='mx-auto'>
               <TouristSpot ></TouristSpot>
               </div>
            </div>
         
            <div >
             
                <h2 className='text-center font-bold "

    text-xl lg:text-3xl'>Client Reviews</h2>
                <p className='text-center font-normal text-base lg:text-xl mt-5  mb-10'>Discover why our clients rave about our service and products in their own words.</p>
                <Clientreview></Clientreview>
            </div>
            <div className=' my-10  '>
                <h2 className='text-center mb-5 font-bold text-xl lg:text-3xl'>Southeast Asia</h2>
                <p className='text-center mb-8 text-base lg:text-xl'>Southeast Asia is a popular tourist destination, attracting millions of visitors each year</p>
                <CountryCard></CountryCard>
            </div>
            <div>
                <SpecialOffers></SpecialOffers>
            </div>
            <div className='my-10 '>
        
                <Link className="btn btn-wide  mx-auto flex justify-center text-black dark:text-white bg-cyan-400 hover:bg-cyan-500 focus:shadow-lg  transition-transform transform hover:scale-110 active:scale-95 duration-300" to='/travelai'>Explore Our Travel AI <FaRobot></FaRobot> </Link>
            </div>
            <div className='my-5 lg:my-8'>
                <h1 className='text-center font-bold  lg:text-3xl my-10'>Thank you for choosing Horizon Travel!</h1>
                <h2 className='text-center font-normal  text-base lg:text-xl mb-5'> To help us improve and serve you better, we would be grateful if you could share your experience by leaving a review on our website</h2>
                    <ReviewForm></ReviewForm>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;