import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import "./banner.css"
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <section className=''>
            <div className="container mx-auto py-10 banner">
                <Carousel responsive={responsive} draggable infinite className='md:h-[600px]'>
                    <div className='text-center text-white cursor-pointer relative carousel-img-box'>
                        <img src={img1} alt="img1" className='rounded-lg w-full md:h-[600px] after:bg-gray-500' />
                        <div className="content absolute px-10 md:px-0 md:ml-24 top-1/2 max-w-md -translate-y-1/2 text-left z-10">
                            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold md:mb-5">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-y-2 md:space-x-5 md:mt-5'>
                                <button className='px-1 text-sm md:text-md btn bg-secondary text-white'>Discover More</button>
                                <button className='px-1 text-sm md:text-md btn hover:secondary bg-transparent text-white'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white cursor-pointer relative carousel-img-box'>
                        <img src={img2} alt="img1" className='rounded-lg w-full md:h-[600px]' />
                        <div className="content absolute px-10 md:px-0 md:ml-24 top-1/2 max-w-md -translate-y-1/2 text-left z-10">
                            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold md:mb-5">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-y-2 md:space-x-5 md:mt-5'>
                                <button className='px-1 text-sm md:text-md btn bg-secondary text-white'>Discover More</button>
                                <button className='px-1 text-sm md:text-md btn hover:secondary bg-transparent text-white'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white cursor-pointer relative carousel-img-box'>
                        <img src={img3} alt="img1" className='rounded-lg w-full md:h-[600px]' />
                        <div className="content absolute px-10 md:px-0 md:ml-24 top-1/2 max-w-md -translate-y-1/2 text-left z-10">
                            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold md:mb-5">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-y-2 md:space-x-5 md:mt-5'>
                                <button className='px-1 text-sm md:text-md btn bg-secondary text-white'>Discover More</button>
                                <button className='px-1 text-sm md:text-md btn hover:secondary bg-transparent text-white'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white cursor-pointer relative carousel-img-box'>
                        <img src={img4} alt="img1" className='rounded-lg w-full md:h-[600px]' />
                        <div className="content absolute px-10 md:px-0 md:ml-24 top-1/2 max-w-md -translate-y-1/2 text-left z-10">
                            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold md:mb-5">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-y-2 md:space-x-5 md:mt-5'>
                                <button className='px-1 text-sm md:text-md btn bg-secondary text-white'>Discover More</button>
                                <button className='px-1 text-sm md:text-md btn hover:secondary bg-transparent text-white'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section >
    );
};

export default Banner;