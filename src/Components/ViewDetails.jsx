import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';
const ViewDetails = () => {
    const loadeddata = useLoaderData()
    const{_id,tourists_spot_name,country_Name,location,description,seasonality,cost,travel_time,visitors,photo,Email,username}=loadeddata
    console.log(loadeddata);

    return (
        <div>
             <div>
      <NavBar></NavBar>
      <Helmet>
        <title>View Tourists Spot</title>
      </Helmet>
      <div data-aos="zoom-in"  data-aos-duration="1500" className="px-1 py-1 md:px-3 md:py-2 lg:px-8 lg:py-8">
        <div
          className="hero  h-[300px] lg:h-[700px]  bg-cover bg-center "
          style={{
            backgroundImage:
            `url(${photo})`
          }}
        >
          <div className="hero-overlay bg-opacity-10 bg-center bg-cover "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <h1 className="mb-5 text-base text-[#cffcff] lg:text-5xl font-extrabold w-full ">
             {tourists_spot_name}
              </h1>
            </div>
          </div>
        </div>
        <h1 data-aos="zoom-in"  className="font-bold text-3xl mt-10">{}</h1>
        <p data-aos="zoom-in"  className="mt-3 mb-3">{description}</p>
        <table data-aos="zoom-in"  className="table-auto w-full text-sm border border-solid ">
          <tbody>
            <tr>
              <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg ">
                Average Cost
              </td>
              <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">
               {cost}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg ">
                Seasonality
              </td>
              <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg ">
       {seasonality}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg">
               Country
              </td>
              <td className="px-2 py-1 border border-solid0 text-xs md:text-lg lg:text-lg">
           {country_Name}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">
                Location
              </td>
              <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">
             {location}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">
              Travel Time
              </td>
              <td className="px-2 py-1 border text-xs md:text-lg lg:text-lg">
                {travel_time}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">
              Total Visitors Per Year
              </td>
              <td className="px-2 py-1 border text-xs md:text-lg lg:text-lg">
                {visitors}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">
              Created By
              </td>
              <td className="px-2 py-1 border text-xs md:text-lg lg:text-lg">
                {username}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">
              Creator's Email
              </td>
              <td className="px-2 py-1 border text-xs md:text-lg lg:text-lg">
                {Email}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <a href="/">
          
            <Link to='/alltourists' className="btn btn-sm bg-cyan-400 mt-4  text-xs mb-6 text-black w-28">
              Explore More
            </Link>
          </a>
         
        </div>
      </div>
      <Footer></Footer>
    </div>
        </div>
    );
};

export default ViewDetails;