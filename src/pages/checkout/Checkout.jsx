import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Checkout = () => {
    const { user } = useContext(AuthContex)
    const product = useLoaderData();
    const navigate = useNavigate();
    const { title, price, _id, img } = product;
    const handeSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            title,
            email,
            img,
            date,
            price,
            service_id: _id
        }
        axios.post("http://localhost:5000/bookings", order, { withCredentials: true })
            .then(res => {
                res.data.insertedId && Swal.fire({ title: `Product successfully booked`, icon: "success" });
                res.data && navigate("/");
            })
    }
    return (
        <section>
            <div className="container mx-auto">
                <div>
                    <h2 className="text-xl py-20 text-center font-bold lg:text-4xl md:text-2xl bg-gray-200 mt-10 rounded-lg">{title}</h2>
                    <form className="md:card-body p-2" onSubmit={handeSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='space-y-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className='space-y-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Deu Amount</span>
                                    </label>
                                    <input type="text" defaultValue={price} placeholder="Deu Amount" name="amount" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;