import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedusers = useLoaderData()
 
    const{_id,tourists_spot_name,country_Name,location,description,seasonality,cost,travel_time,visitors,photoEmail,username}=loadedusers
    const handleUpdate = e =>{
        e.preventDefault()
        const form  = new FormData(e.currentTarget)
        const tourists_spot_name = form.get("name")
        const country_Name = form.get("country")
        const location = form.get("location")
        const description = form.get("description")
        const seasonality = form.get("seasonality")
        const cost = form.get("cost")
        const travel_time = form.get("traveltime")
        const visitors = form.get("visitors")
        const photo = form.get("photo")
        const updatedinfo = {tourists_spot_name,country_Name,location,description,seasonality,cost,travel_time,visitors,photo}

        fetch(`  https://react-tourism-server.vercel.app/tourist/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatedinfo)
})
.then(res => res.json())
.then(data => {

    console.log(data);

    if(data.modifiedCount>0){
        
        Swal.fire({
            title: 'Success!',
            text: 'Tourist Spot Updated successfully.',
            icon: 'Success',
            confirmButtonText: 'Success'
            
          })   
    }
    
})
e.currentTarget.reset()

    }

    return (
        <div>
        <Helmet>
        <title>Update Tourists Spot</title>
    </Helmet>
    <NavBar></NavBar>
    <form
        onSubmit={handleUpdate}
        className="w-full max-w-lg p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-8">Update Tourist Spot</h2>

        <div className="relative z-0 mb-8">
          <input
            type="text"
            name="name"
            id="name"
            className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
            placeholder="Tourist Spot Name"
            required
          />
          <label
            htmlFor="name"
            className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tourist Spot Name
          </label>
        </div>

        <div className="relative z-0 mb-8">
          <input
            type="text"
            name="photo"
            id="photo"
            className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
            placeholder="Photo Url"
            required
          />
          <label
            htmlFor="photo"
            className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Photo Url
          </label>
        </div>

        <div className="relative z-0 mb-8">
          <input
            type="text"
            name="country"
            id="countryname"
            className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
            placeholder="Country Name"
            required
          />
          <label
            htmlFor="countryname"
            className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country Name
          </label>
        </div>

        <div className="relative z-0 mb-8">
          <input
            type="text"
            name="location"
            id="location"
            className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
            placeholder="Location"
            required
          />
          <label
            htmlFor="location"
            className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Location
          </label>
        </div>

        <div className="relative z-0 mb-8">
          <textarea
            name="description"
            id="description"
            className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
            placeholder="Description"
            required
          />
          <label
            htmlFor="description"
            className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mb-8">
          <div className="relative z-0 mb-8 md:mb-0">
            <input
              type="text"
              name="seasonality"
              id="seasonality"
              className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
              placeholder="Seasonality"
              required
            />
            <label
              htmlFor="seasonality"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Seasonality
            </label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              name="cost"
              id="cost"
              className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
              placeholder="Average Cost"
              required
            />
            <label
              htmlFor="cost"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Average Cost
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mb-8">
          <div className="relative z-0 mb-8 md:mb-0">
            <input
              type="text"
              name="traveltime"
              id="traveltime"
              className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
              placeholder="Travel Time"
              required
            />
            <label
              htmlFor="traveltime"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Travel Time
            </label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              name="visitors"
              id="visitors"
              className="peer block w-full px-0 py-4 text-lg text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-cyan-400 placeholder-transparent"
              placeholder="Total Visitors Per Year"
              required
            />
            <label
              htmlFor="visitors"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Total Visitors Per Year
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-cyan-500 bg-white/20 rounded-full shadow-lg hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          Update
        </button>
      </form>
<Footer></Footer>
</div>
    );
};

export default Update;