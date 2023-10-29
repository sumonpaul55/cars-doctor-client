import React from 'react';

const BookingRow = ({ book, handleDelete, handleConfirm }) => {
    const { img, title, date, price, email, customerName, _id } = book;


    return (
        <tr className='flex gap-1 items-center justify-between mt-10'>
            <td><button onClick={() => handleDelete(_id)} className='w-8 h-8 flex items-center justify-center bg-gray-600 cursor-pointer rounded-full text-white'>X</button></td>
            <td>
                <img src={img} className='w-40 h-40' alt="" />
            </td>
            <td>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-xl mb-4'>{customerName}</h3>
                    <div>
                        <p>{email}</p>
                        <p className='font-bold'>{title}</p>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <td><button className='btn border-0 text-white bg-secondary' onClick={() => handleConfirm(_id)}>Confirm</button></td>
        </tr>
    )
};

export default BookingRow;