import React from 'react';


const Contact = () => {
    return (
        <section className='email-Trip my-20 mx-20'>
            <h1 className='Title text-2xl font-bold mb-[20px]'>Give Us your Email</h1>
            <div className='together flex justify-between'>
                <div className='text w-[500px]'>
                    <p className='small-desc text-[14px] text-[#999] h-[fit-content]'>Lorem ipsum dolor<br></br>amet consectetur adipisicing elit. Laboriosam quae deleniti numquam sit quasi repudiandae.</p>
                </div>
                <div className='input bg-[#fff] shadow-[5px_5px_30px_rgba(0,0,0,0.1)] flex rounded-[20px] overflow-hidden'>
                    <input type='input' placeholder='Your email here' className='p-[12px] pl-[20px] w-[400px] outline-none'/>
                    <button className='bg-[#F6D238] border-[2px] border-[#F6D238] py-[15px] px-[30px] rounded-[20px] font-bold cursor-pointer shadow-[5px_5px_30px_0rgba(0,0,0,0.1)] hover:bg-[#f1f1f1] transition duration-500 hover:rotate-6 '>Send</button>
                </div>

            </div>

        </section>
    );
};

export default Contact;