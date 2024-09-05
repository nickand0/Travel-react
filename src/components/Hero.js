// src/components/Hero.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 

const Hero = () => {
    return (
        <section className="flex justify-center w-[100%] mt-20 mx-10">
            <div className="relative h-[500px] w-[600px]">
                <img src="/image/img.jpg" alt="Image 1" className="absolute w-[450px] h-[500px] transition duration-500 object-cover border-[8px] border-solid border-[#fff] shadow-[5px_5px_30px_rgba(0,0,0,0.1)] rounded-[2rem] hover:scale-[1.1] hover:rotate-[10deg]" />
                <img src="/image/img2.jpg" alt="Image 2" className="absolute w-[350px] h-[350px] transition duration-500 top-[150px] left-[250px] object-cover border-[8px] border-solid border-[#fff] shadow-[5px_5px_30px_rgba(0,0,0,0.1)] rounded-[2rem] hover:scale-[1.1] hover:rotate-[-10deg]" />
            </div>
            <div className="ml-[100px] w-[30%] flex flex-col  justify-center">
                <span className='text-[#F6D238] font-bold '>Planifiez Votre Aventure </span>
                <h1 className="my-[20px] mx-0 text-[35px] font-semibold leading-[50px]">Votre voyage Idéal<br></br>Commence Ici</h1>
                
                <p className='mb-[25px] text-[#999] w-[70%] text-[14px]'>Découvrez des voyages sur mesure conçus pour vous. Notre équipe d'experts est prête à transformer vos rêves d'évasion en réalité avec des options personnalisées et un service irréprochable. </p>
                <div className="buttons flex items-center ">
                    <button className=' bg-[#F6D238] border-[2px] border-[#F6D238] py-[15px] px-[30px] rounded-[20px] font-bold cursor-pointer shadow-[5px_5px_30px_0rgba(0,0,0,0.1)] hover:bg-[#f1f1f1] transition duration-500 hover:rotate-6'>
                        <span>Book Now</span> 
                    </button>
                    <button className='see-video border-0 flex bg-transparent items-center cursor-pointer'>
                        <div className="video-bg ml-[20px] h-[50px] w-[50px] rounded-[50%] relative shadow-[5px_5px_30px_rgba(0,0,0,0.1)]" style={{ backgroundImage: `url('/image/img3.jpg')`, backgroundPosition:'center', backgroundSize:'cover'}}>
                            <div className='play-btn flex justify-center items-center absolute h-[30px] w-[30px] bg-[#fff] rounded-[50%] shadow-[5px_5px_30px_rgba(0,0,0,0.1)] right-[-20px] translate-x-[-20%] translate-y-[50%]'>
                                <FontAwesomeIcon icon={faPlay} className=" text-[#CF0711]" />
                            </div>
                        </div>
                        <span className='ml-[25px] font-bold'>Watch our Story</span>
                    </button>
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;
