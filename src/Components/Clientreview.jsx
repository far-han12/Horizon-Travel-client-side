import React from 'react';

const Clientreview = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10'>
            <div className="container flex flex-col shadow-xl w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://i.ibb.co/qRFmRGb/close-up-portrait-young-hindu-man-isolated-standing-looks-serious-facial-expression-human-nature-emo.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">George William</h4>
				<span className="text-xs dark:text-gray-600">7 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-700">
        <div className="rating rating-sm lg:rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2"   />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" checked  />
</div>
			<span className="text-xl font-bold">5.0</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
		<p>Overall, Horizon Travel appears to be a popular choice for travelers in Bangladesh seeking convenient and affordable travel options.</p>
		<p> ShareTrip is praised for its user-friendly interface and easy booking process. It 
  highlights good customer support, with users reporting reliable assistance and responsiveness.
</p>
	</div>
</div>
            <div className="container flex flex-col w-full max-w-lg shadow-xl  p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://i.ibb.co/Fz1MNZG/young-man-with-beard-round-glasses.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Henry Cavil</h4>
				<span className="text-xs dark:text-gray-600">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-700">
        <div className="rating rating-sm lg:rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2"   />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
</div>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
		<p>Horizon Travel offers a diverse range of accommodations worldwide, but it's essential for travelers to conduct thorough research and communicate with hosts to ensure a positive experience.</p>
		<p>It frequently offers sales, last-minute travel deals, and bundle discounts, making it appealing for travelers looking to save money.</p>
	</div>
</div>
        </div>
    );
};

export default Clientreview;