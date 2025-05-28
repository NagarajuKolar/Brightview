import React from 'react'
import '../CSS/Footer.css'
import locationmap from '../Statics/Images/locationmap.png';
import locationlogo from '../Statics/Images/location.svg';
import phonelogo from '../Statics/Images/phonego.svg';
import maillogo from '../Statics/Images/mail.svg';
import all from '../Statics/Images/all.svg';
import review from '../Statics/Images/review.svg';
import logohos from '../Statics/Images/logohos.svg';
import direction from '../Statics/Images/direction.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
                <div className=" bg-grey">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

                    <div className="col-md-3 mb-3 ms-5">
                        <img className="img-fluid px-3" src={logohos} alt="map" />
                        <p>We Are Dedicated To Preserving And Enhancing <br />
                            Your Vision With Compassionate,Expert Care
                            </p>
                        <img className="img-fluid px-0" src={all} alt="map" />
                    </div>

                    <div className="col-md-3 mb-3" >
                        <h5 className="fw-bold">Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/aboutus" className="nav-link p-0 text-body-secondary">About Us</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Blogs</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Media Center</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Doctors</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Testimonial</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3" >
                        <h5 className="fw-bold">Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Cataract</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Glaucoma</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Retina</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Oculoplasty</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Refractive Surgery</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Neuro Opthalmology</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3" >
                        <h5 className="fw-bold">Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-3">
                                <a href="#" className="nav-link p-0 text-body-secondary"><img className="img-fluid pe-2" src={phonelogo} alt="map" />7277570490</a>
                            </li>
                            <li className="nav-item mb-3">
                                <a href="#" className="nav-link p-0 text-body-secondary"><img className="img-fluid pe-2" src={maillogo} alt="map" />Netrapuradhan@gmail.com</a>
                            </li>
                            <li className="nav-item mb-3">
                                <a href="#" className="nav-link p-0 text-body-secondary d-flex">
                                    <img className="img-fluid pe-2"style={{marginBottom:"55px"}} src={locationlogo} alt="map" />
                                    <div>
                                        <div>H.O.6-3-1092/A, A-Block,</div>
                                        <div>Shanti Sikhara Apartments, Somajiguda.</div>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>

                </footer>

            </div>
    </>
  )
}

export default Footer