// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <header className="flex justify-between items-center py-[20px] px-[8%] bg-white w-[100%]">
            <div className="text-[20px] font-bold w-[30%]">Travel<span className='text-[#F6D238]'>.</span> </div>
            <nav className='w-[40%]'>
                <ul className="flex justify-center text-[#999] gap-4">
                    <li><a href="#" className="py-[10px] text-[14px] px-[25px] rounded-[20px] transition duration-500 hover:bg-[#F6D238] hover:p-[15px] hover:text-black hover:font-bold hover:rounded-[20px]">Home</a></li>
                    <li><a href="#" className="py-[10px] text-[14px] px-[25px] rounded-[20px] transition duration-500 hover:bg-[#F6D238] hover:p-[15px] hover:text-black hover:font-bold hover:rounded-[20px]">Destination</a></li>
                    <li><a href="#" className="py-[10px] text-[14px] px-[25px] rounded-[20px] transition duration-500 hover:bg-[#F6D238] hover:p-[15px] hover:text-black hover:font-bold hover:rounded-[20px]">Pricing</a></li>
                    <li><a href="#" className="py-[10px] text-[14px] px-[25px] rounded-[20px] transition duration-500 hover:bg-[#F6D238] hover:p-[15px] hover:text-black hover:font-bold hover:rounded-[20px]">Review</a></li>
                </ul>
            </nav>
            <div className='flex justify-end w-[30%]'>
                <button className=" bg-[#F6D238] border-[2px] border-[#F6D238] py-[15px] px-[30px] rounded-[20px] font-bold cursor-pointer shadow-[5px_5px_30px_0rgba(0,0,0,0.1)] hover:bg-[#f1f1f1] transition duration-500 hover:rotate-6">
                    <FontAwesomeIcon icon={faPhone} className="text-xl mr-[5px]" /> 
                    Réserver
                </button>
            </div>
        </header>
    );
};

export default Header;
