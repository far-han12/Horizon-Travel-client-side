import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleAdClick = () => {
      setIsVisible(false); // Set visibility to false when ad is clicked
  };

  if (!isVisible) return null; // Don't render the component if not visible

    return (
    
      <div className={`fixed z-20 mx-auto top-20 left-0 right-0 w-[300px] md:w-[600px] lg:w-[700px] bg-cover h-96 text-white ${isVisible ? '' : 'hidden'}`} 
      style={{ backgroundImage: 'url(https://i.ibb.co/DCzShcs/cascade-boat-clean-china-natural-rural.jpg)' }}
      onClick={handleAdClick}>
<div className="hero-overlay bg-opacity-50 ">
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
<h1 className='text-center font-serif italic font-bold  text-red-300 lg:text-5xl'>Special Offers</h1>
<h1 className="mb-5 text-4xl font-bold font-serif mt-5">Save up to</h1>
<h1 className="mb-5 text-4xl font-bold text-cyan-400 italic font-serif">50%</h1>
<p className="mb-5 font-serif">Whether you're dreaming of visiting iconic landmarks, immersing yourself in diverse cultures, or enjoying natural wonders, there's a whole world out there waiting to be discovered.</p>
</div>
</div>
</div>

</div>
  

    );
};

export default SpecialOffers;