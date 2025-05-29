import React from 'react'
import Footer from '../Components/Footer';
import Contactimage from '../Statics/Images/ContactusHead.png'
import Doctorimg from '../Statics/Images/ContactusDoctor.png'
import '../CSS/contactuspage.css'
function ContactusPage() {
    return (
        <>


            <div className="image-container position-relative">
                <img src={Contactimage} alt="img" className="img-fluid w-100 image" />
                <div className="effect">
                    <div className="text position-absolute top-50 start-50 translate-middle text-white text-center">
                        <p className="mb-1">Home / Contact Us</p>
                        <h1 className="fw-bold"> Contact </h1>
                    </div>
                </div>
            </div>


            <div className=" mt-3 mb-5 " style={{width:"1149px", height:"671",marginLeft:'145px'}}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={Doctorimg} alt="img" style={{width:"640px", height:"671"}}/>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div >

                            <form className=" box shadow rounded px-3 " >
                                <h4 className=" mt-3 mb-4 fw-bold">Send us a message</h4>
                                <div className="mb-4">
                                    <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="Raj" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Enter Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" placeholder="Raj***123@Gmail.Com" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Enter Phone <span className="text-danger">*</span></label>
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
            </div>

            <Footer />

        </>
    )
}

export default ContactusPage