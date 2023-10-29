import React from 'react';
import team1 from "../../../assets/images/team/1.jpg"
import team2 from "../../../assets/images/team/2.jpg"
import team3 from "../../../assets/images/team/3.jpg"
import { GrFacebookOption } from "react-icons/gr"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
const Team = () => {
    return (
        <section className="px-1 py-20">
            <div className="container mx-auto">
                <div className='space-y-5 max-w-[600px] mx-auto text-center'>
                    <h2 className='text-secondary font-bold text-xl md:text-2xl'>Team</h2>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Meet Our Team</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {/* team items */}
                    <div className="card card-compact bg-base-100 shadow-md border p-5">
                        <figure><img src={team2} alt="team1" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-center">Car Engine Plug</h2>
                            <div className="text-center text-xl font-semibold">
                                <p className='text-gray-600'>Engine Expert</p>
                                <div className='flex items-center gap-4 justify-center mt-5'>
                                    <div className='text-center text-white bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <GrFacebookOption /></span>
                                    </div>
                                    <div className='text-center text-white bg-cyan-400 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineTwitter /></span>
                                    </div>
                                    <div className='text-center text-white bg-blue-800 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <BiLogoLinkedin /></span>
                                    </div>
                                    <div className='text-center text-white bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineInstagram /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* team items */}
                    <div className="card card-compact bg-base-100 shadow-md border p-5">
                        <figure><img src={team3} alt="team1" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-center">Car Engine Plug</h2>
                            <div className="text-center text-xl font-semibold">
                                <p className='text-gray-600'>Engine Expert</p>
                                <div className='flex items-center gap-4 justify-center mt-5'>
                                    <div className='text-center text-white bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <GrFacebookOption /></span>
                                    </div>
                                    <div className='text-center text-white bg-cyan-400 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineTwitter /></span>
                                    </div>
                                    <div className='text-center text-white bg-blue-800 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <BiLogoLinkedin /></span>
                                    </div>
                                    <div className='text-center text-white bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineInstagram /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* team items */}
                    <div className="card card-compact bg-base-100 shadow-md border p-5">
                        <figure><img src={team1} alt="team1" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-center">Car Engine Plug</h2>
                            <div className="text-center text-xl font-semibold">
                                <p className='text-gray-600'>Engine Expert</p>
                                <div className='flex items-center gap-4 justify-center mt-5'>
                                    <div className='text-center text-white bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <GrFacebookOption /></span>
                                    </div>
                                    <div className='text-center text-white bg-cyan-400 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineTwitter /></span>
                                    </div>
                                    <div className='text-center text-white bg-blue-800 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <BiLogoLinkedin /></span>
                                    </div>
                                    <div className='text-center text-white bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full'>
                                        <span className='text-2xl'> <AiOutlineInstagram /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Team; 