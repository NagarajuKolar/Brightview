import '../CSS/Navbar.css'
import Logo from '../Statics/Images/Internet.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import logohos from '../Statics/Images/logohos.svg';
import { useState } from 'react';
import Appointment from "./Appointment";
import loc from '../Statics/Images/location navbar.svg';
import net from '../Statics/Images/netnavbar.svg';
import phoneplus from '../Statics/Images/phoneplusnav.svg';
import book from '../Statics/Images/book.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [showAppointment, setShowAppointment] = useState(false);
    return (
        <>
            <div className="container-fluid bg-white" >

                <div className="location-bar bg-light  px-3 d-flex justify-content-end align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={loc} alt="img" className="image-fluid px-2" />
                        <a
                            href="https://www.google.com/maps?q=H.O.+6-3-1092/A,+A-Block,+Shanti+Sikhara+Apartments"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark text-decoration-none me-4"
                        >
                            H.O. 6-3-1092/A, A-Block, Shanti Sikhara Apartments
                        </a>

                        <img src={phoneplus} alt="img" className="image-fluid px-2" />
                        <span className="me-3">7207573049</span>

                        <div className="dropdown">
                            <button className="btn dropdown-toggle p-0 border-0 bg-transparent" id="netDropdown" data-bs-toggle="dropdown"aria-expanded="false"
                                style={{ lineHeight: 0 }}>
                                <img
                                    src={net} alt="Network" width="19.13" height="15.13" 
                                    style={{ cursor: 'pointer' }}
                                />
                            </button>
                            <ul className="dropdown-menu " aria-labelledby="netDropdown">
                                <li><a className="dropdown-item" href="#">English</a></li>
                            </ul>
                        </div>



                    </div>
                </div>


                <header className="navbar navbar-expand-md navbar-light bg-white w-100 py-3">
                    <div className="container-fluid">
                        <a href="/" className="d-flex align-items-center text-decoration-none navbar-logo">
                            <img src={logohos} alt="Logo" width="80.66" height="60.57" />
                            <div className="logo-text  d-flex align-items-center ms-2">
                                <div className="bright-view mb-1">BRIGHT VIEW</div>
                                <div className="eye-hospital ">EYE HOSPITAL</div>
                            </div>
                        </a>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 navbar-nava custom">
                                <li><NavLink to="/"
                                    className={({ isActive }) =>
                                        `nav-link px-2 ${isActive ? "text-primary" : "text-dark"}`}>Home</NavLink></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-2 text-dark" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <li><a className="dropdown-item" href="#">Eye Checkup</a></li>
                                        <li><a className="dropdown-item" href="#">Laser Surgery</a></li>
                                        <li><a className="dropdown-item" href="#">Cataract Treatment</a></li>
                                    </ul>
                                </li>

                                <li><Link to="/doctors" className="nav-link px-2 text-dark">Doctors</Link></li>
                                <li><NavLink to="/aboutus" className={({ isActive }) =>
                                    `nav-link px-2 ${isActive ? "text-primary" : "text-dark"}`}>About Us</NavLink></li>
                                <li><Link to="/Contactus" className="nav-link px-2 text-dark">Contact Us</Link></li>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-2 text-dark" href="#" id="langDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Logo} alt="Lang" width="19.13" height="19.13" />
                                    </a>
                                     <ul className="dropdown-menu" aria-labelledby="langDropdown">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                    </ul> 
                                </li> */}
                            </ul>


                            <div className="text-end navbar-ap">
                                <button
                                    type="button"
                                    onClick={() => setShowAppointment(true)}
                                    className="btn btn-primary rounded-pill enlarged-btn me-0">
                                    {/* <img src={book} alt="img" className="image-fluid px-2" /> */}
                                    Book An Appointment
                                </button>
                            </div>
                            {showAppointment && <Appointment onClose={() => setShowAppointment(false)} />}
                        </div>
                    </div>
                </header>

            </div>
        </>
    );
}

export default Navbar;
