// src/components/Gallery.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './destination.css'

const Gallery = () => {
    const destinations = [
        { name: 'France', image: '/image/France.jpg', description: 'Art de vivre,cuisine raffinée et paysages enchanteurs.'},
        { name: 'Egypt', image: '/image/Egypt.jpg', description: 'Pyramides,Nil et mystères antiques fascinants'},
        { name: 'Canada', image: '/image/Canada.jpg', description: 'Paysages grandioses et villes' ,desc2:'dynamiques' },
        { name: 'South Africa', image: '/image/South-Africa.jpg', description: 'Safaris spectaculaires et culture diversifiée ' },
    ];

    return (
        <section className="destinations mt-20 mx-20">
            <h1 className="my-[20px] mx-0 text-[35px] font-semibold leading-[50px]">Explore Top Destinations</h1>
            <div className='desc-button flex justify-between my-[30px] mx-0'>
                <p className='text-[#999] w-[60%] text-[14px]'>Découvrez des déstinations fascinantes à travers le monde.<br></br>Chaque lieu offre une expérience unique et mémorable</p>
                <div className='buttons flex gap-4'>
                    <button className='bg-[#F6D238] cursor-pointer border-[2px] border-solid border-[#F6D238] h-[50px] w-[50px] rounded-[50%] transition duration-500 hover:bg-[#f1f1f1] hover:transform hover:rotate-[10deg]'>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-[25px]" />
                    </button>
                    <button className='bg-[#F6D238] cursor-pointer border-[2px] border-solid border-[#F6D238] h-[50px] w-[50px] rounded-[50%] transition duration-500 hover:bg-[#f1f1f1] hover:transform hover:rotate-[10deg]  '>
                        <FontAwesomeIcon icon={faChevronRight} className="text-xl text-[25px]" />
                    </button>

                </div>
            </div>
            
            <div className=" gallerie flex justify-between">
                {destinations.map((dest, index) => (
                    <div key={index} className="image w-[24%] h-[350px] rounded-[1rem] shadow-[5px_5px_30px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-pointer ml-[20px] bg-[#fff] p-[20px]">
                        <img src={dest.image} alt={dest.name} className="object-cover h-[100%] w-[100%] rounded-[1rem] transition duration-500 " />
                        <div className="description transform translate-y-[350px] bg-[#fff] p-[20px] text-center transition duration-500 ">
                            <h1 className="text-[20px] mb-[10px]">{dest.name}</h1>
                            <p className='text-[14px] text-[#999]'>{dest.description}</p>
                            <span className="block mt-2">{dest.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
