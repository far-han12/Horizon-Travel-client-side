import React, { useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './location.css'
// import { AuthContext } from '../../AuthProvider';
const Location = () => {
    // const{property} = useContext(AuthContext)
    const location = [
      {
        "id": 1,
        "title": "Kathmandu,Nepal",
       
        "latitude": 27.71533703283438, 
        "longitude": 85.32115357062277
    },
      {
        "id": 2,
        "title": "Banani,Dhaka",
       
        "latitude": 23.796521347703774,
        "longitude":  90.38883941145792
    },
      {
        "id": 3,
        "title": "Uttara,Dhaka",
       
        "latitude": 23.876631349121947,
        "longitude":  90.39194730921504
    },
      {
        "id": 4,
        "title": "Bangkok,Thailand",
       
        "latitude": 13.719044576346352,
        "longitude":  100.50257304756634
    },
    //   {
    //     "id": 5,
    //     "title": "Luxury High-rise Apartment",
       
    //     "latitude": 34.052235,
    //     "longitude": -118.243683
    // },
    //   {
    //     "id": 6,
    //     "title": "Luxury High-rise Apartment",
       
    //     "latitude": 34.052235,
    //     "longitude": -118.243683
    // },
    //   {
    //     "id": 7,
    //     "title": "Luxury High-rise Apartment",
       
    //     "latitude": 34.052235,
    //     "longitude": -118.243683
    // },
    //   {
    //     "id": 8,
    //     "title": "Luxury High-rise Apartment",
       
    //     "latitude": 34.052235,
    //     "longitude": -118.243683
    // },
    //   {
    //       "id": 9,
    //       "title": "Luxury High-rise Apartment",
         
    //       "latitude": 34.052235,
    //       "longitude": -118.243683
    //   }
    ]
    
    location.map((p,q) => console.log(p.latitude))

    return (
        <div className=''>
    

  <MapContainer className='leaflet-container' center={[24.882100617609385, 90.28002909052749]} zoom={4} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {
                location.map((p,q) => <Marker key={q} position={[p.latitude,p.longitude]}>
                <Popup>
                  {p.title}
                </Popup>
              </Marker>)
           
           }   

    
  </MapContainer>,

        </div>
    );
};

export default Location;