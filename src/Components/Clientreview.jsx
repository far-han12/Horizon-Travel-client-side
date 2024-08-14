import React, { useEffect, useState } from 'react';

const Clientreview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://react-tourism-server.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10'>
            {reviews.map((review, index) => (
                <div key={index} className="container flex flex-col shadow-xl w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={review.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{review.name}</h4>
                                <span className="text-xs dark:text-gray-600">{review.daysAgo} days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <div className="rating rating-sm lg:rating-md rating-half">
                                {/* Assuming rating is out of 5 */}
                                {[...Array(5)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="radio"
                                        className={`bg-orange-500 mask mask-star-2 ${i < review.rating ? 'mask-half-2' : 'mask-half-1'}`}
                                        checked={i + 1 === Math.ceil(review.rating)}
                                    />
                                ))}
                            </div>
                            <span className="text-xl font-bold">{review.rating}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Clientreview;
