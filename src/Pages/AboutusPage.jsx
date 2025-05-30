import React from 'react'
import image from '../Statics/Images/aboutuspagepic.png';
import image2 from '../Statics/Images/aboutuspagepic2.png';
import servimage from '../Statics/Images/services.png'
import surimage from '../Statics/Images/sur.png'
import testimage from '../Statics/Images/tests.png'
import Eye from '../Statics/Images/Eye.png'
import Mission from '../Statics/Images/Mission.svg';
import HandshakeLogo from '../Statics/Images/handshake.svg';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../CSS/AboutusPage.css'
function AboutUsPage() {
  return (
    <>
     
    
      <div className="about-container position-relative">
        <img src={image} alt="img" className="img-fluid w-100 aboutimage" />
        <div className="effect">
          <div className="text position-absolute top-50 start-50 translate-middle text-white text-center">
            <p className="mb-1">Home / About Us</p>
            <h1 className="fw-bold">About Us</h1>
          </div>
        </div>
      </div>


      <div className="container mob-con mt-5">
        <div className="row ">
          <div className="col-md-6 px-2">
            <img src={image2} alt="img" className="image-fluid aboutimag" />
          </div>

          <div className="col-md-6 about-content px-1">
            <h5 className="h5we">Who We Are</h5>
            <h1 className="tit">
              We Make A Difference <br />
              In <span className="text-primary">Their Life</span>
            </h1>
            <p className="desc">
              An Eye Hospital Is A Specialized Medical Center Dedicated To Diagnosing, Treating,
              Managing, And Preventing Various Eye Conditions And Vision Problems.
            </p>

            <div className='mt-5 icon-row d-flex  '>
              <img src={servimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid pe-2 ' />
              <div className='dash-line mx-3 '></div>
              <img src={surimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid ' />
              <div className='dash-line mx-3'></div>
              <img src={testimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid ' />
            </div>

            <div className="d-flex justify-content-center align-items-start service-offset-row">
              <div className="offset-block">
                <ul className="list-unstyled">
                  <h5 className="fw-bold">Services</h5>
                  <li>Contact Lens</li>
                  <li>Prescription</li>
                  <li>Ophthalmic Surgical</li>
                  <li>Consultation</li>
                </ul>
              </div>

              <div className="offset-block">
                <ul className="list-unstyled">
                  <h5 className="fw-bold">Surgery</h5>
                  <li>Squint</li>
                </ul>
              </div>

              <div className="offset-block">
                <ul className="list-unstyled">
                  <h5 className="fw-bold">Tests</h5>
                  <li>Retina</li>
                  <li>Examination</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className="container mobile-about mt-5">
        <div className="row  w-100">
          <div className="col-md-6">
           <h2 className='custom-underline text-start text-primary pb-3 mb-2'>Mission & Vision</h2>
            <div className=" pt-3">
              <h3 className="text-primary  mb-2"><img className=" misimg" src={Mission} alt="MissionLogo" />Mission</h3>
              <p className="text-st ps-4  ">Our Vision is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence in Hyderabad And Beyond.</p>
            </div>
            <div className="pt-3">
              <h3 className="text-primary"><img className=" visimg" src={HandshakeLogo} alt="HandLogo" />Values</h3>
              <p className=" vis ps-4 ">Our Vision Is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence In Hyderabad And Beyond.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Eye} alt="img" className="image-fluid eyeimage" />
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default AboutUsPage