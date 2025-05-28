import '../CSS/contactus.css'
import locationmap from '../Statics/Images/locationmap.png';
import locationlogo from '../Statics/Images/location.svg';
import phonelogo from '../Statics/Images/phonego.svg';
import maillogo from '../Statics/Images/mail.svg';
import all from '../Statics/Images/all.svg';
import review from '../Statics/Images/review.svg';
import logohos from '../Statics/Images/logohos.svg';
import direction from '../Statics/Images/direction.png';
import { Link } from 'react-router-dom';
import eye from '../Statics/Images/bg-eye.png';


function Contactus() {
    return (
        <>


            <div>
                <h2 className="mt-3 mb-3 text-center loc">Our Location</h2>
                <div className="container-fluid position-relative">


                    <iframe className="img-fluid" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10447.978740467892!2d78.4430151908565!3d17.432095971015798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748241595187!5m2!1sen!2sin"
                        style={{ width: '100%', height: '600px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div
                        className="position-absolute bg-white p-3 shadow rounded"
                        style={{ top: '50px', left: '5%', Width: '461px', height: 'auto' }}>
                        <h5 className="fw-bold">Bright View Eye Care Hospital</h5>
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <p className="mb-2">
                                    H.O. 6-3-1092/A, A-Block,<br />
                                    Shanti Sikhara Apartments,<br />
                                    Above CSB Bank Rajbhavan Road,<br />
                                    Somajiguda, Hyd - 500082
                                </p>
                                <div className="d-flex align-items-center mb-2">

                                    <span>4.8 <img src={review} alt="Logo" style={{ paddingBottom: '4px' }} /></span>
                                    <span className="ms-2 p-1 text-primary" style={{ fontSize: '16px', paddingBottom: '5px' }}>10k Reviews</span>
                                </div>
                                <a aria-label="View larger map" target="_blank" jstcache="2" href="https://maps.google.com/maps?ll=17.432096,78.443015&amp;z=13&amp;t=m&amp;hl=en&amp;gl=IN&amp;mapclient=embed" jsaction="mouseup:defaultCard.largerMap" className="google-maps-link">View larger map</a>
                            </div>
                            <div>
                                <img src={direction} alt="Directions" style={{ height: '65px' }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  foot w-100 d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${eye})` , backgroundRepeat:'no-repeat',backgroundPosition: 'center',}}>

                    <div className="col-md-3 mb-3 ">
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
                        <h5 className="fw-bold ">Contact Us</h5>
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
                <div className="bg-light  d-flex justify-content-center align-items-center">
                    <p className="mb-0 text-center">
                        Copy Right Bright View Eye Care Hospital.com
                    </p>
                </div>
        </>
    );
}

export default Contactus;
