import React from 'react';
import NavBar from "../Components/NavBar"
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <div className='mt-3 mb-10'><NavBar></NavBar></div>
            <div className='mb-10'><Banner></Banner></div>
        </div>
    );
};

export default Home;