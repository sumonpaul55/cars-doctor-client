import React from 'react';
import calicon from "../../../assets/icons/icons (1).png"
import calicon2 from "../../../assets/icons/icons (2).png"
import calicon3 from "../../../assets/icons/icons (3).png"
const Address = () => {
    return (
        <section className='my-10'>
            <div className="container mx-auto">
                <div className='bg-black p-20 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg'>
                    <div className='flex items-center text-white gap-4'>
                        <img src={calicon} alt="" width='40' />
                        <div>
                            <p className='text-base'>We are open monday-friday</p>
                            <p className='text-xl md:text-2xl'><time>10:00 AM</time> - <time>21:00 PM</time></p>
                        </div>
                    </div>
                    <div className='flex items-center text-white gap-4'>
                        <img src={calicon2} alt="" width='40' />
                        <div>
                            <p className='text-base'>Have a question?</p>
                            <p className='text-xl md:text-2xl'>+2546 251 2658</p>
                        </div>
                    </div>
                    <div className='flex items-center text-white gap-4'>
                        <img src={calicon3} alt="" width='40' />
                        <div>
                            <p className='text-base'>Need a repair? our address</p>
                            <p className='text-xl md:text-2xl'>Liza Street, New York</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;