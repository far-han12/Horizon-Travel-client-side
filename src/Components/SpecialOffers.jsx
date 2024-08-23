import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

const SpecialOffers = () => {
  const [isVisible, setIsVisible] = useState(true); 

  const handleAdClick = () => {
    setIsVisible(false); 
  };

  if (!isVisible) return null; 

  return (
    <div
      className={`fixed z-20 mx-auto top-20 left-0 right-0 w-[300px] md:w-[500px] lg:w-[600px] bg-cover h-96 text-white ${isVisible ? '' : 'hidden'}`}
      style={{ backgroundImage: 'url(https://i.ibb.co/DVTHsgM/cascade-boat-clean-china-natural-rural.webp)' }}
    >
      <div className="relative hero-overlay bg-opacity-50">
        <button
          onClick={handleAdClick}
          className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 focus:outline-none"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className='text-center font-serif italic font-bold text-red-300 lg:text-5xl'>Special Offers</h1>
            <h1 className="mb-5 text-4xl font-bold font-serif mt-5">Save up to</h1>
            <h1 className="mb-5 text-4xl font-bold text-cyan-400 italic font-serif">50%</h1>
            <p className="mb-5 font-serif text-center">
              Whether you're dreaming of visiting iconic landmarks, immersing yourself in diverse cultures, or enjoying natural wonders, there's a whole world out there waiting to be discovered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
