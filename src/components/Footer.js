// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-[20px] bg-[#f1f1f1] rounded-t-[60px] text-center flex flex-col justify-center items-center">
            <div className="text-[20px] font-bold w-[30%]">Travel<span className='text-[#F6D238]'>.</span> </div>
            <p className='text-[#999] text-[14px]'>  All rights reserved<br></br><span className='text-[#F6D238]'>&copy; 2024 </span></p>
        </footer>
    );
};

export default Footer;
