import React, { useContext } from 'react';
import loginimg from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
const Login = () => {
    const { login } = useContext(AuthContex)
    const location = useLocation()

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({ title: `<span class="text-red-500">${res.user.displayName}</span> Logged in successfully`, icon: "success" })
                }

                // get access tocken
                const user = { email }
                axios.post("http://localhost:5000/jwt", user, {
                    withCredentials: true
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Content-type": "Application/json",
                    // },
                    // withCredentials: true,
                }).then(res => {
                    res.status && navigate(location?.state ? location?.state : "/")
                }).catch(err => {
                    Swal.fire({ title: `${err}`, icon: 'error' })
                })
            })
            .catch(err => {
                Swal.fire(err && { title: `Email or password may wrong`, icon: "error" })
            })
    }
    return (
        <section className='py-20 px-1'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='text-right'>
                        <img src={loginimg} alt="" className='mx-auto' />
                    </div>
                    <div className="rounded-lg card-body flex-shrink-0 shadow-2xl bg-base-100 py-10 mx-auto md:w-1/2">
                        <h2 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">Login Now</h2>
                        <form className="" onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn hover:bg-secondary text-white bg-secondary' />
                            </div>
                        </form>
                        <p>New to Car-doctors? <Link to="/sign-up" className='text-secondary font-bold'>Sign Up</Link></p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;