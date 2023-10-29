import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const location = useLocation();
    // console.log(location.pathname)
    if (loading) {
        return <h2 className='text-center text-3xl font-bold py-20'>Loading...</h2>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;