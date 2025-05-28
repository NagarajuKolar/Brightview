import React from 'react'
import Image from '../Statics/Images/doctor-patient.png';
import MissionLogo from '../Statics/Images/missionlogo.svg';
import HandshakeLogo from '../Statics/Images/handshake.svg';
 import '../CSS/aboutus.css'

function AboutUs() {
    return (
        <>
            <h2 className="mt-3 mb-5 text-center  abouttext">About <span className='text-primary'>Us</span></h2>
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-md-6 px-4 " >
                        <img
                            src={Image} alt="img"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    <div className="col-md-6 mt-2 p-0 ">
                        <div className='container p-0' >
                            <h2 className='mobile-margin text-start '>Bright View <span className="text-primary">Eye Hospital</span></h2>
                            <p className=" desc mt-4">At Bright View Eye Hospital, With A Team Of Experienced Ophthalmologists And Advanced Diagnostic And Surgical Equipment, We Provide Comprehensive Eye Care For Patients Of All Ages. Your Vision Is Our Priority.</p>
                        </div>
                        <div className="pt-3 mt-2 ">
                            <h3 className="text-primary mb-2"><img className="pe-2" src={MissionLogo} alt="MissionLogo" />Mission</h3>
                            <p className="desc  mt-2">Our Vision is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence in Hyderabad And Beyond.</p>
                        </div>
                        <div className="pt-3 mt-2">
                            <h3 className="text-primary"><img className="pe-2" src={HandshakeLogo} alt="HandLogo" />Values</h3>
                            <p className="desc mt-2 ">Our Vision Is To Become The Premier Destination For Those Seeking Top-Notch Eye Care, Setting The Standard For Excellence In Hyderabad And Beyond.</p>
                        </div>
                        <div className="d-flex text-center mt-5 pe-1 bg-warning rounded p-4 text-dark mobile-width w-100">
                              <div className="col-md-4 d-flex flex-column align-items-center justify-content-center  border-end">
                                <h3>98.2%</h3>
                                <p>Succesful Operations</p>
                                
                            </div>
                            
                            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center   border-end">
                                <h3>100+</h3>
                                <p>Expert Doctors</p>
                            </div>
                              <div className="col-md-4 d-flex flex-column align-items-center justify-content-center ">
                                <h3>15k+</h3>
                                <p>Happy Patients</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs