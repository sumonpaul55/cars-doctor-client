import React from 'react';
import logo from "../../assets/logo.svg"
const Footer = () => {
    return (
        <section className='bg-slate-200'>
            <div className='container mx-auto'>
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <img src={logo} alt="" />
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </section>
    );
};

export default Footer;