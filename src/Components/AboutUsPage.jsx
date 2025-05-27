import React from 'react'
import AboutUs from "./AboutUs";
import Navbar from './Navbar';
import image from '../Statics/Images/aboutuspagepic.png';
import image2 from '../Statics/Images/aboutuspagepic2.png';
import surimage from '../Statics/Images/surgery.png'
import Eye from '../Statics/Images/Eye.png'
import Mission from '../Statics/Images/Mission.svg';
import HandshakeLogo from '../Statics/Images/handshake.svg';
import Footer from './Footer';
function AboutUsPage() {
  return (
    <>
      <div >
        <img src={image} alt="img" className="image-fluid w-100" />
      </div>
      <div className="container mt-5">
        <div className="row w-100">
          <div className="col-md-6 px-3">
            <img src={image2} alt="img" className="image-fluid " />
          </div>
          <div className="col-md-6">
            <h4>Who we are</h4><br />
            <h1>we Make A Difference <br />
              In Their Life</h1>
            <p>An Eye Hospital Is A Specialized Medical Center Dedicated To Diagnosing, Treating, Managing, And Preventing Various Eye Conditions And Vision Problems</p>
            <div className='mt-5 d-flex '>
              <img src={surimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid ' /><p className='pt-4 ' style={{ width: '121px' }}>------------------</p>
              <img src={surimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid ' /><p className='pt-4 ' style={{ width: '121px' }}>------------------</p>
              <img src={surimage} alt="surimage" style={{ width: "74px", height: "74px" }} className='image-fluid ' />
            </div>
            <div className="d-flex mt-0 ">
              <ul className=" ms-5 px-4  list-unstyled">
                <h5 className="fw-bold">Services</h5>
                <li>Contact lens</li>
                <li>Prescription</li>
                <li>Opthalamic Surgical</li>
                <li>Consultation</li>
              </ul>
              <ul className='px-4 '>
                <h5 className="fw-bold">Surgery</h5>
                <p>Squint</p>
              </ul>
              <ul className=" ms-5 px-5  list-unstyled">
                <h5 className="fw-bold">Tests</h5>
                <li>Retina</li>
                <li>Examination</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="container mt-5">
        <div className="row  w-100">
          <div className="col-md-6">
            <h2 className='text-start text-primary border-bottom border-3 border-primary pb-2'>Mission & Vision</h2>
            <div className="pt-3">
              <h3 className="text-primary mb-2"><img className="pe-2" src={Mission} alt="MissionLogo" />Mission</h3>
              <p className=" ps-4 fw-medium ">Our Vision is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence in Hyderabad And Beyond.</p>
            </div>
            <div className="pt-3">
              <h3 className="text-primary"><img className="pe-2" src={HandshakeLogo} alt="HandLogo" />Values</h3>
              <p className="ps-4 fw-medium">Our Vision Is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence In Hyderabad And Beyond.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Eye} alt="img" className="image-fluid " />
          </div>
        </div>
      </div>
<Footer/>
    </>

  )
}

export default AboutUsPage