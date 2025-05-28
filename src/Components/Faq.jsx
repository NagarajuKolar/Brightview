import React, { useState } from 'react'
import '../CSS/faq.css'
import Image from '../Statics/Images/woman-doctor.png';
import main from '../Statics/Images/maintestominial.png';
import lefttop from '../Statics/Images/lefttop.png';
import leftbottom from '../Statics/Images/leftbottom.png';
import righttop from '../Statics/Images/righttop.png';
import rightbottom from '../Statics/Images/rightbottom.png';
import main1 from '../Statics/Images/Ellipse 8.png';
import lefttop1 from '../Statics/Images/Ellipse 9.png';
import leftbottom1 from '../Statics/Images/Ellipse 10.png';
import righttop1 from '../Statics/Images/Ellipse 11.png';
import rightbottom1 from '../Statics/Images/Ellipse 12.png';
import main2 from '../Statics/Images/Ellipse 13.png';
import lefttop2 from'../Statics/Images/Ellipse 14.png';
import leftbottom2 from '../Statics/Images/Ellipse 15.png';
import righttop2 from '../Statics/Images/Ellipse 16.png';
import rightbottom2 from '../Statics/Images/Ellipse 17.png';
import quote from '../Statics/Images/quote.svg';
import plus from '../Statics/Images/plus.svg';
import minus from '../Statics/Images/minus.svg';


function Faq() {
  const data = [
    {
      question: "What Services Do Eye Hospitals Provide?",
      answer: "Eye Hospitals Typically Offer Services Like Glaucoma Treatment, Retina Services, Pediatric Ophthalmology, And Emergency Eye Care.",
    },
    {
      question: "What is LASIK surgery?",
      answer: "LASIK is a popular vision correction surgery using a laser to reshape the cornea.",
    },
    {
      question: "Can children undergo eye exams?",
      answer: "Yes, children should regularly undergo eye exams to detect any early vision issues.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const togfaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="faq-section">
        <div className="faq-container">
          <div className="faq-image">
            <img src={Image} alt="doc" />
          </div>

          <div className="faq-box">
            <h2>FAQs</h2>
            {data.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className={`faq-question ${activeIndex === index ? "text-primary fw-bold" : ""}`} onClick={() => togfaq(index)}         >
                  <span className="faq-number">{index + 1}</span>
                  <span className="faq-text">{faq.question}</span>
                  <img
                    className="faq-icon"
                    src={activeIndex === index ? minus : plus}
                    alt="toggle"
                  />
                </div>
                {activeIndex === index && (
                  <div className="faq-answer px-5">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className='testimon mt-5 mb-5 text-center  testi-text'>Testimonials</h1>
      <div className="container-fluid  bg-primary carousel slide w-100 " id="testimonialCarousel" data-bs-ride="carousel"data-bs-interval="3000" style={{ width: '100%' }}>
        <div className="quote-mark left"><img className="p-1 img-fluid" src={quote} alt="images" /></div>
        <div className="quote-mark right"><img className="p-1 img-fluid" src={quote} alt="images" /></div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={lefttop} alt="User 1" className="img left-top" />
            <img src={leftbottom} alt="User 2" className="img left-bottom" />
            <img src={main} alt="Main user" className="img main" />
            <img src={righttop} alt="User 3" className="img right-top" />
            <img src={rightbottom} alt="User 4" className="img right-bottom" />
            <div className="testimonial-text test-bt">
              “I Was Nervous About Getting LASIK, But The Doctors At [Hospital Name] Made Me Feel Completely At Ease. The Procedure Was Quick And Painless, And Now I Can See Clearly Without Glasses For The First Time In 15 Years!”
              <br />
              <span className="author">― Priya D., Caregiver</span>
            </div>
          </div>

          <div className="carousel-item">
            <img src={lefttop1} alt="User 1" className="img left-top" />
            <img src={leftbottom1} alt="User 2" className="img left-bottom" />
            <img src={main1} alt="Main user" className="img main" />
            <img src={righttop1} alt="User 3" className="img right-top" />
            <img src={rightbottom1} alt="User 4" className="img right-bottom" />
            <div className="testimonial-text test-bt">
              “I Was Nervous About Getting LASIK, But The Doctors At [Hospital Name] Made Me Feel Completely At Ease. The Procedure Was Quick And Painless, And Now I Can See Clearly Without Glasses For The First Time In 15 Years!”
              <br />
              <span className="author">― Ramesh K., Engineer</span>
            </div>
          </div>

          <div className="carousel-item">
            <img src={lefttop2} alt="User 1" className="img left-top" />
            <img src={leftbottom2} alt="User 2" className="img left-bottom" />
            <img src={main2} alt="Main user" className="img main" />
            <img src={righttop2} alt="User 3" className="img right-top" />
            <img src={rightbottom2} alt="User 4" className="img right-bottom" />
            <div className="testimonial-text test-bt">
              “I Was Nervous About Getting LASIK, But The Doctors At [Hospital Name] Made Me Feel Completely At Ease. The Procedure Was Quick And Painless, And Now I Can See Clearly Without Glasses For The First Time In 15 Years!”
              <br />
              <span className="author">― Ramesh K., Engineer</span>
            </div>
          </div>
        </div>

        <div className="carousel-indicators dots mt-3">
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div>

    </>
  )
}

export default Faq