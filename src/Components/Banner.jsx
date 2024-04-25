import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'animate.css';

import {  Navigation, Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';
// import './Banner.css'
const Banner = () => {
    return (
        <div >
     <Swiper
       slidesPerView={1}
       spaceBetween={30}
       loop={true}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
   
    //    navigation={true}
       modules={[ Autoplay]}
       className="mySwiper"
      >
         
            <SwiperSlide>
               
               <div  className="hero  h-[300px] lg:h-[600px]  bg-cover bg-center " style={{ backgroundImage: 'url(https://i.ibb.co/bWz8VKz/small-house-built-peaceful-green-hill-high-up-mountains.jpg)'}}>
           <div className="hero-overlay bg-opacity-10 bg-center bg-cover "></div>
           <div className="hero-content text-center text-neutral-content">
             <div  className="w-full">
               <h1 data-aos="zoom-in"  data-aos-duration="1000" data-aos-delay='500' className="mb-5 a text-base text-[#ffffff] lg:text-5xl font-extrabold w-full ">Discover Your Next Adventure</h1>
               <p data-aos="fade-left" data-aos-easing="linear" data-aos-delay='1000' data-aos-duration="1500" className="mb-5 sm:text-xs text-[#fafafa] lg:text-sm">Let's embark on a virtual tour through Horizontal Travel's online realm, where every click brings you closer to the adventure of your dreams.  </p>
          
             </div>
           </div>
         </div>
                 
               </SwiperSlide>
        <SwiperSlide>    <div className="hero w-full h-[300px] lg:h-[600px]  bg-cover bg-center " style={{ backgroundImage: 'url(https://i.ibb.co/8KDVwXr/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand.jpg)'}}>
           <div className="hero-overlay bg-opacity-10 bg-center bg-cover "></div>
           <div className="hero-content text-center text-neutral-content">
       <div className='w-full'>
       <h1 d className="mb-5 text-base animate__animated animate__pulse animate__infinite	 text-[#ffffff] lg:text-5xl font-extrabold w-full  ">Legian Beach</h1>
               <p className="mb-5  animate__animated animate__pulse animate__infinite sm:text-xs text-[#ffffff] lg:text-sm">A paradise for travelers seeking diverse experiences, from cultural immersion to beachfront relaxation</p>
       </div>
           </div>
         </div>
      
         </SwiperSlide>
        <SwiperSlide ><div className="hero w-full h-[300px] lg:h-[600px]  bg-cover bg-center " style={{ backgroundImage: 'url(https://i.ibb.co/MM8rMqC/pexels-rachel-claire-7276804.jpg)'}}>
           <div className="hero-overlay bg-opacity-10 bg-center bg-cover "></div>
           <div className="hero-content text-center text-neutral-content">
       <div className='w-full'>
       <h1  className="mb-5 text-base animate__animated animate__pulse animate__infinite text-[#ffffff] lg:text-5xl font-extrabold w-full  ">Hạ Long Bay</h1>
               <p className="mb-5 animate__animated animate__pulse animate__infinite sm:text-xs text-[#ffffff] lg:text-sm">
Hạ Long Bay, located in northeastern Vietnam, is renowned for its emerald waters </p>
       </div>
           </div>
         </div></SwiperSlide>
        <SwiperSlide>   <div className="hero w-full h-[300px] lg:h-[600px]  bg-cover bg-center " style={{ backgroundImage: 'url(https://i.ibb.co/NNk7VWs/big-entrance-gate-bali-indonesia.jpg)'}}>
           <div className="hero-overlay bg-opacity-10 bg-center bg-cover "></div>
           <div className="hero-content text-center text-neutral-content">
       <div className='w-full'>
       <h1  className="mb-5 animate__animated animate__pulse animate__infinite text-base text-[#ffffff] lg:text-5xl font-extrabold w-full  ">Balinese Temple</h1>
               <p className="mb-5 animate__animated animate__pulse animate__infinite sm:text-xs text-[#ffffff] lg:text-sm">Renowned for their stunning architecture, characterized by intricate carvings, towering pagodas, and colorful ornamentation.</p>
       </div>
           </div>
         </div></SwiperSlide>
   

      </Swiper>     
    
      
         </div>
    );
};

export default Banner;