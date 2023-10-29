import React, { useContext } from 'react';
import login from "../../../assets/images/login/login.svg"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const SignUp = () => {
    const { signUp } = useContext(AuthContex)
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                }).then()
                    .catch()
                Swal.fire({ title: "User created successfully", icon: "success" });
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <section className='py-20 px-1'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='text-right'>
                        <img src={login} alt="" className='mx-auto' />
                    </div>
                    <div className="rounded-lg card-body flex-shrink-0 shadow-2xl bg-base-100 py-10 mx-auto md:w-1/2">
                        <h2 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">Login Now</h2>
                        <form className="" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <input type="submit" value="Sign Up" className='btn hover:bg-secondary text-white bg-secondary' />
                            </div>
                        </form>
                        <p>Already Have an Account? Please <Link to="/login" className='text-secondary font-bold'>Login</Link></p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;