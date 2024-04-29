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

        fetch(`http://localhost:5000/tourist/${_id}`, {
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
    <form onSubmit={handleUpdate} className="max-w-lg p-4 mx-auto mb-20">
  <div  className="relative z-0 w-full mb-5 group">
      <input type="text" name="name" id="name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
      <label   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tourist Spot Name</label>
  </div>
  <div  className="relative z-0 w-full mb-5 group">
      <input type="text" name="photo" id="photo"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
      <label   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url</label>
  </div>
  <div  className="relative z-0 w-full mb-5 group">
      <input type="text" name="country" id="countryname"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
      <label   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country Name</label>
  </div>
  <div  className="relative z-0 w-full mb-5 group">
      <input type="text" name="location" id="location"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
  </div>
    <div  className="relative z-0 w-full mb-5 group">
        <textarea name="description" id="last_name5"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
  <div  className="grid md:grid-cols-2 md:gap-6">
    <div  className="relative z-0 w-full mb-5 group">
        <input type="text" name="seasonality" id="first_name4"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seasonality</label>
    </div>
    <div  className="relative z-0 w-full mb-5 group">
        <input type="text" name="cost" id="first"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Average Cost</label>
    </div>
  </div>
  <div  className="grid md:grid-cols-2 md:gap-6">
    <div  className="relative z-0 w-full mb-5 group">
        <input type="text"  name="traveltime"   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Travel Time </label>
    </div>
    <div  className="relative z-0 w-full mb-5 group">
        <input type="text" name="visitors"   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Visitors Per Year</label>
    </div>
  </div>
  
  <button type="submit"  className="text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-cyan-400 hover:bg-cyan-500 dark:focus:ring-cyan-800">Add</button>
</form>
<Footer></Footer>
</div>
    );
};

export default Update;