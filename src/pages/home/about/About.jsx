import React from 'react';
import img1 from "../../../assets/images/about_us/parts.jpg"
import img2 from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <section className='py-20 px-1'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <div className='relative'>
                            <img src={img2} alt="" className='w-[90%]' />
                            <img src={img1} alt="" className='absolute -bottom-20 w-1/2 right-0 border-4 border-white rounded-md' />
                        </div>
                    </div>
                    <div className='lg:max-w-[60%]'>
                        <h2 className='text-secondary font-bold text-xl md:text-2xl'>About</h2>
                        <div className='space-y-4'>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">We are qualified & of experience in this field</h1>
                            <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                            <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                            <button className='px-2 md:px-3 py-1 md:py-2 bg-secondary text-white mt-2'>Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;