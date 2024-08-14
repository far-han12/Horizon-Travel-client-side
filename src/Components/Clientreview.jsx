import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Clientreview = () => {
	
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://react-tourism-server.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className='m-4 overflow-hidden'>
		<Carousel responsive={responsive} rewind={false}  infinite={true} autoPlay={true} autoPlaySpeed={1000} arrows={false} >
            {reviews.map((review, index) => (
                <div key={index} className="container overflow-hidden mx-auto space-x-2   flex flex-col shadow-xl w-full md:w-[350px] lg:w-[400px] p-6 h-[300px] divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between   p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={review.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{review.name}</h4>
                                <span className="text-xs dark:text-gray-600">{review.daysAgo} days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2   dark:text-yellow-700">
                            <div className="rating rating-sm lg:rating-md rating-half">
                                {[...Array(5)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="radio"
                                        className={`bg-orange-500 mask w-full mask-star-2 ${i < review.rating ? 'mask-half-2' : 'mask-half-1'}`}
                                        checked={i + 1 === Math.ceil(review.rating)}
                                    />
                                ))}
                            </div>
                            <span className="text-xl font-bold">{review.rating}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-black">
                        <p>{review.text}</p>
                    </div>
                </div>
            ))}
		</Carousel>
        </div>
    );
};

export default Clientreview;
