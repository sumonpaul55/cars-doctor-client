import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        axios.get("http://localhost:5000/services", { withCredentials: true })
            .then(res => {
                setServices(res.data)
            }).catch(err => {
                Swal.fire(err)
            })

    }, [])
    return (
        <section className='py-20 px-1'>
            <div className="container mx-auto">
                <div className='text-center max-w-[600px] space-y-5 mx-auto py-20'>
                    <h2 className='text-secondary font-bold text-xl md:text-2xl'>About</h2>
                    <h1 className='text-xl md:text-2xl lg:text-5xl font-bold'>Our Service Area</h1>
                    <p className='text-base text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;