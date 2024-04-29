import React from 'react';

const TouristCard = ({s}) => {
    const{tourists_spot_name,country_Name,location,description,seasonality,cost,travel_time,visitors,photo,Email,username}=s
    return (
        <div className=' mx-auto'>
            <div className="card w-[400px] h-80 image-full">
  <figure><img src={photo} alt="Shoes"  /></figure>
  <div className="card-body">
    <h1 className="card-title mb-2">{tourists_spot_name}</h1>
    <p>Total Visitors Per Year : {visitors}</p>
    <p> Average Cost :{cost}</p>
    <p> Travel Time: {travel_time}</p>
    <p>Seasonality: {seasonality}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-cyan-400 border-0 hover:bg-cyan-500">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TouristCard;