import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewForm = () => {
 
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const form  = new FormData(e.currentTarget)
        const name= form.get("name")
        const photo = form.get("photo")
        const rating= form.get("rating")
        const text= form.get("description")
        const info= {name,photo,rating,text}
        fetch(`  https://react-tourism-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .then(data => {
            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Your review has been submitted successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);        
            // Reset the form
            e.target.reset();
   
        })
        
        
        // Simulate sending data to the backend and getting the "days ago" response
        const today = new Date();
        const reviewDate = today; // Assume reviewDate is the submission date
        const daysAgo = Math.floor((today - reviewDate) / (1000 * 60 * 60 * 24));

      

        e.target.reset();
    };

    return (
        <form className="review-form max-w-md mx-auto mt-8 p-4 " onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                type='text'
                    name="name"
            id="name"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Image URL:</label>
                <input
                    name='photo'
                    id='photo'
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Rating (out of 5):</label>
                <input
                    name='rating'
                    id='rating'
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Review Text:</label>
                <textarea
                   name='description'
                   id='description'
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-cyan-400 text-white font-bold py-2 px-4 w-full lg:w-[200px]  rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;