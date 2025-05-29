import React from 'react'
import Locationmap from '../Statics/Images/Locationpagemap.png'
import review from '../Statics/Images/review.svg';
import direction from '../Statics/Images/direction.png';
import Mail from '../Statics/Images/locmail.svg';
import Loc from '../Statics/Images/loca.svg';
import call from '../Statics/Images/call.svg';
import '../CSS/Locationpage.css'
import Footer from '../Components/Footer';
function LocationPage() {
    return (
        <>


            <div className="image-container position-relative">
                <img src={Locationmap} alt="img" className="img-fluid w-100 image" />
                <div className="effect">
                    <div className="text position-absolute top-50 start-50 translate-middle text-white text-center">
                        <p className="mb-1">Home/Location</p>
                        <h1 className="fw-bold"> Location </h1>
                    </div>
                </div>
            </div>

            <div className="container mt-5 border shadow" style={{ width: '1265px', height: '527px' }}>
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <div className="container-fluid  p-0 position-relative">
                                <iframe className="img-fluid" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10447.978740467892!2d78.4430151908565!3d17.432095971015798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748241595187!5m2!1sen!2sin"
                                    style={{ width: '833px', height: '527px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <div
                                    className="position-absolute bg-white p-3 shadow rounded"
                                    style={{ top: '50px', left: '5%', Width: '356px', height: 'auto' }}>
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
                    </div>
                    <div className="col-md-4 contact">
                        <form className=" boxloc  " >
                            <h4 className=" mb-4 mt-2  send ">Send us a message</h4>
                            <div className="mb-4">
                                <label className="form-label labels">Full Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Raj" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label labels">Enter Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Raj***123@Gmail.Com" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label labels">Enter Phone <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="+91 8179118528" />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" rows="3" placeholder="Write A Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary fw-bold rounded-pill w-100 ">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>

<div className="bg-primary contact-container text-white mt-5 d-flex align-items-center justify-content-center">
  <div className="container">
    <div className="row text-center justify-content-center">
      
      
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
        <div className="d-flex align-items-center">
          <div className=" me-3">
            <img src={call} alt="contact" style={{width:'56px',height:'56px'}} />
          </div>
          <div className="text-start">
            <strong>Contact</strong><br />
            720757049
          </div>
        </div>
      </div>  
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
        <div className=" d-flex align-items-center">
          <div className="pt-1 me-3">
            <img src={Mail} alt="" style={{width:'56px',height:'56px'}} />
          </div>
          <div className="text-start">
            <strong>Mail</strong><br />
            Netrapurandhan@Gmail.Com
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img src={Loc} alt=""style={{width:'56px',height:'56px'}}  />
          </div>
          <div className="text-start">
            <strong>Location</strong><br />
            H.O.6-3-1092/A, A-Block,<br />
            Shanti Sikhara Apartments, Somajiguda.
          </div>
        </div>
      </div>

    </div>
  </div>
</div>







            <Footer />
        </>

    )
}

export default LocationPage