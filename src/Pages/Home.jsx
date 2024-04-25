import React from 'react';
import NavBar from "../Components/NavBar"
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <div className='mt-3 mb-10'><NavBar></NavBar></div>
            <div className='mb-10'><Banner></Banner></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;