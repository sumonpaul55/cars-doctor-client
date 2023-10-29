import React from 'react';
import PropTypes from "prop-types"
// import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service

    return (
        <div className="card card-compact bg-base-100 shadow-md border p-5">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl md:text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-end text-xl font-semibold text-secondary">
                    <p>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><button>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;