import React from 'react';
import image from '../Statics/Images/headround.png';
import ellipse from '../Statics/Images/Ellipse 6.png';
import '../CSS/Head2.css';
import cal from '../Statics/Images/cal.svg';
import search from '../Statics/Images/search.svg';
import phone from '../Statics/Images/headph.svg';
function Head2() {
  return (

    <div className="head2-container bg-primary text-white d-flex align-items-center">
      <div className="left-text">
        <h1>Expert Eye Care<br />For Better Vision</h1>
        <p>
          An Eye Hospital Is A Specialized Medical Facility Dedicated To The Diagnosis,
          Treatment, And Prevention Of Eye Disorders And Diseases.
        </p>
        <button className="btn btn-light text-primary fw-bold">Book Appointment →</button>
      </div>

      <div className="right-image">
        <img className="ellipse-img" src={ellipse} alt="Ellipse" />
        <img className="doctor-img" src={image} alt="Doctor" />
      </div>
      <div className="card card1">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img className="img icon" style={{ width: "24px", height: "24px" }} src={search} alt="Search Icon" />
          <div>
            Well Qualified Doctors<br />
            <small className="text-muted">Treat With Care</small>
          </div>
        </div>
      </div>
      <div className="card card2">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img className="img icon" style={{ width: "17px", height: "19.12px" }} src={cal} alt="Calendar Icon" />
          <div>
            Book An Appointment<br />
            <small className="text-muted">Online Appointment</small>
          </div>
        </div>
      </div>
      <div className="phonecard  text-white card3">
        <span >  <img className="img icon" style={{ width: "22.9px", height: "22.9px",marginLeft:"115px",marginTop:"10px" }} src={phone} alt="ph Icon" />Contact No<br /></span>
        <small className=" text-white">+917207573049</small>
      </div>
    </div>

  );
}

export default Head2;
