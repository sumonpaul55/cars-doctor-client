import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import "./booking.css"
import BookingRow from './BookingRow';
import { BsArrow90DegUp } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import Swal from 'sweetalert2';
import axios from 'axios';
const Bookings = () => {
    const { user } = useContext(AuthContex)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
            .catch(err => {
                Swal.fire(err.message)
            })
    }, [user])
    const handleDelete = (id) => {
        const procced = confirm("Are you sure? You Want to delete this?")
        if (procced) {
            fetch(`http://localhost:5000/deleteBookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({ title: "Deleted succefully", icon: "success" });
                        const remainingBooking = bookings.filter(bookings => bookings._id !== id)
                        setBookings(remainingBooking)
                    }
                })
        }
    }
    const handleConfirm = id => {
        const proccess = confirm("Are you sure! You Want to confirm");
        if (proccess) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ status: "confirmed" })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({ title: "Updated successfully", icon: 'success' })
                        const remainingBookings = bookings.filter(rbookings => rbookings._id !== id);
                        const updatedBookings = bookings.find(uBookings => uBookings._id === id);
                        updatedBookings.status = "confirmed"
                        setBookings([updatedBookings, ...remainingBookings])
                    }
                })
        }
    }
    return (
        <div className='container mx-auto py-20'>
            <div className='py-20 cart-detail rounded-lg'>
                <h2 className='text-white ml-10 text-3xl font-bold'>{bookings.length}</h2>
            </div>
            <table className='w-full'>
                <thead className='flex justify-between bg-gray-200 mt-20 py-2 gap-1 px-2'>
                    <tr className='flex gap-1 items-center justify-between w-full'>
                        <th>X</th>
                        <th>Image</th>
                        <th>Detail</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        bookings.map((book) => (
                            <BookingRow key={book._id} book={book} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>
                        ))
                    }
                </tbody>
            </table>
            <div className='flex justify-between mt-20'>
                <button className='flex items-center gap-3 cursor-pointer md:ml-32 hover:text-secondary font-bold text-xl'>
                    <span><BsArrow90DegUp /></span>
                    <span>Continu Shopping</span>
                </button>
                <button className='flex items-center gap-3 cursor-pointer hover:text-secondary font-bold text-xl'>
                    <span><AiFillDelete /></span>
                    <span>Clear Shopping Cart</span>
                </button>
            </div>
        </div>
    );
};

export default Bookings;