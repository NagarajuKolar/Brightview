import React from 'react'
import img1 from '../Statics/Images/Component 1.png';
import img2 from '../Statics/Images/Component 2.png';
import img3 from '../Statics/Images/Component 3.png';
import img4 from '../Statics/Images/Component 4.png';
import img5 from '../Statics/Images/Component 5.png';
import img6 from '../Statics/Images/Component 6.png';
import img7 from '../Statics/Images/Component 7.png';
import img8 from '../Statics/Images/Component 8.png';
import '../CSS/services.css'

function Services() {
  const Images=[img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <>
  <div className="container">
  <h1 className="mt-5 mb-3 text-center services-text">
    Our Best <span className="text-primary">Services</span>
  </h1>
  <p style={{ fontFamily: 'source sans Pro, sans-serif' }} className="fs-4 px-4 text-center text-muted">
    At <span className="text-primary">Bright View</span> Eye Hospital, We Are Dedicated To Delivering World-Class Eye Care With Compassion, Precision, And The Latest Technology.
  </p>
</div>

<div className="container">
  <div className="row">
    {Images.map((image, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
        <img className="img-fluid w-100 rounded  image-hover shadow-sm" src={image} alt={`service-${index}`} />
      </div>
    ))}
  </div>
</div>

    
    </>
  )
}

export default Services