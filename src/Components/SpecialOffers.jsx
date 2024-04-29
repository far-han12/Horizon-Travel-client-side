import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
    return (
        <div className=' md:p-4 mb-5 lg:p-5'>
            <h2 className='text-center font-serif italic mb-5 text-red-400 lg:text-3xl'>Special Offers</h2>
            <p className='text-center font-serif  mb-5 text-black-400 lg:text-xl'>Our Best Offer Package For You</p>
<div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/DCzShcs/cascade-boat-clean-china-natural-rural.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-serif">Save up to</h1>
      <h1 className="mb-5 text-5xl font-bold text-cyan-400 italic font-serif">50%</h1>
      <p className="mb-5 font-serif">Whether you're dreaming of visiting iconic landmarks, immersing yourself in diverse cultures, or enjoying natural wonders, there's a whole world out there waiting to be discovered.</p>
      <Link to='/alltourists' className="btn border-0 bg-cyan-400">Explore Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SpecialOffers;