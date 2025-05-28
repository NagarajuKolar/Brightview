import React from 'react';
import Headcover from '../Statics/Images/Head.png';
import book from '../Statics/Images/bookapp.svg';
import whatsapp from '../Statics/Images/upwhats.svg';
import '../CSS/Head.css'
import { useNavigate } from 'react-router-dom';
import Hospi from '../Statics/Images/Hospi.png';
import Appointment from "./Appointment";
import { useState } from 'react';



function Head() {
  const navigate = useNavigate();
  const [showAppointment, setShowAppointment] = useState(false);
  return (
    <>
      <div className="container-fluid p-0 m-0 w-100">
        <img src={Hospi} alt="img " className="image hospi-image" />
        <div className="text ">
          <h1>Eye Specialists  </h1>
          <h1>You Can <span className="span">Trust</span></h1>
          <button type="button" onClick={() => setShowAppointment(true)} className="btn btn-primary fw-bold  btn-custom d-none d-md-block  me-2">
            Book An Appointment
          </button>
        </div>
        <div className="buttons ">
          <button type="button" onClick={() => setShowAppointment(true)} className="btn btn-primary  rounded-pill me-2">
            <img src={book} alt="img" className="image-fluid  px-1" />Book An Appointment
          </button>
          {showAppointment && <Appointment onClose={() => setShowAppointment(false)} />}
          <button type="button" className="btn btn-success  wts-btn rounded-pill me-2">
            <img src={whatsapp} alt="img" className="image-fluid px-1" /> Chat With Us
          </button>
        </div>
      </div>


    </>
  );
}

export default Head;
