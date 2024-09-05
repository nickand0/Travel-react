import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; 
import './Price.css'

const Price = () => {
    const destinations = [
        { name: 'Paris,Île-de-France,France', image: '/image/img4.jpg', rate: '4.7',price:'$550'},
        { name: 'Cape Town, Afrique du Sud', image: '/image/img5.jpg', rate: '4.3',price:'$350'},
        { name: 'Kigali,Rwanda', image: '/image/img6.jpg', rate: '4.5',price:'$300'},
    ];

    return(
        <section className="best-trip flex flex-col justify-center items-center mt-20 mx-20">
            <h1 className="text-center text-[30px] font-bold ">Explore Top Destinations</h1>
            <p className="small-desc text-center text-[14px] my-[30px] mx-auto text-[#999]">Lorem ipsum dolor sit, <br></br>amet consectetur adipisicing elit. Laboriosam quae deleniti numquam sit quasi repudiandae.</p>
            <div className="box-list w-[80%] flex justify-between">
                {destinations.map((dest, index) => (
                    <div key={index} className="box w-[32.33%] h-[400px] relative rounded-[1rem] overflow-hidden shadow-[5px_5px_30px_rgba(0,0,0,0.1)]">
                        <img src={dest.image} alt={dest.name} className="w-[100%] h-[100%] object-cover transition duration-500" />
                        <div className="description absolute bottom-0 bg-[#FFF] p-[20px] w-[100%] transition duration-500">
                            <h2 className="text-[16px] font-[500]">{dest.name}</h2>
                            <p  className="rating text-[#dca930] text-lg mt-[5px] font-bold" ><FontAwesomeIcon icon={faStar}/>{dest.rate} </p>
                            <div className="button-description flex justify-between items-center ">
                                <span className="text-[15px]">
                                    From
                                    <strong>
                                        {dest.price}
                                    </strong>
                                </span>
                                <button className="py-[10px] px-[20px] bg-transparent border-[1px] border-solid border-[#F6D238] text-[#F6D238] rounded-[20px] cursor-pointer transition duration-500 hover:bg-[#F6D238] hover:text-black ">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view-all my-[50px] flex items-center justify-center">
                <button className="btn  bg-[#F6D238] border-[2px] border-[#F6D238] py-[15px] px-[30px] rounded-[20px] font-bold cursor-pointer shadow-[5px_5px_30px_0rgba(0,0,0,0.1)] hover:bg-[#f1f1f1] transition duration-500 hover:rotate-6 ">View all</button>
            </div>
        </section>
    )

}

export default Price;