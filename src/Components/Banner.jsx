// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'animate.css';


import { Autoplay} from 'swiper/modules';

import 'swiper/css/effect-fade';


// import required modules

const Banner = () => {
    return (
        <div className='font-sedan relative'>
           <div className='absolute inset-0 flex mt-4 flex-col justify-center items-center text-center text-white z-10 top-[50%]'>
                <div className='text-center'>
                    <div className='text-lg md:text-2xl lg:text-4xl mb-2 font-bold'>
                        <p>Discover Your Next Adventure with </p>
                        <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                        <p className=' animate__animated  animate__infinite animate-pulse '>Horizon Travel</p>
                    </div>
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative bg-[url(https://i.ibb.co/bWz8VKz/small-house-built-peaceful-green-hill-high-up-mountains.jpg)] bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[600px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Explore the World with Ease</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.ibb.co/8KDVwXr/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand.jpg)] bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[600px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Journey Beyond Boundaries</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.ibb.co/MM8rMqC/pexels-rachel-claire-7276804.jpg)] bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[600px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Hassle-Free Travel</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.ibb.co/NNk7VWs/big-entrance-gate-bali-indonesia.jpg)] bg-cover bg-top bg-no-repeat h-[300px] md:h-[400px] lg:h-[600px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Adventure Awaits You</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='relative hero  h-[300px] lg:h-[600px] bg-[url(https://i.postimg.cc/jSdPpRMY/banner-6.jpg)] bg-cover bg-center bg-no-repeat  md:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Wander, Explore, Repeat</h1>
                       
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
           
        </div>
    );
};

export default Banner;