import React from 'react';
import NavBar from "../Components/NavBar"
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';
// import OurOffices from '../Components/OurOffices';
import Location from '../Components/Location/Location';

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='mt-3 mb-10'><NavBar></NavBar></div>
            <div className='mb-10'><Banner></Banner></div>
            {/* <div>
               <Location></Location>
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;