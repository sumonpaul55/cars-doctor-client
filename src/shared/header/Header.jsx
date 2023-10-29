import React, { useContext } from 'react';
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Header = () => {
    const { user, logout } = useContext(AuthContex)
    const handlLogout = () => {
        logout()
            .then(() => {
                Swal.fire({ title: `You have logged Out` })
            })
            .then(err => {
                err && Swal.fire({ title: `${err}`, icon: "error" })
            })
    }
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user?.email ? <>
                <li><Link to="/bookings">My Bookings</Link></li>
                <li><Link to="/"><button onClick={handlLogout}>Log out</button></Link></li> </>
                : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <section>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/"><img src={logo} alt="" className='w-20' /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;