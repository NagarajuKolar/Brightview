import doctor1 from '../Statics/Images/doctor11pic.png';
import doctor2 from '../Statics/Images/doctor1pic.png';
import doctor3 from '../Statics/Images/doctor2pic.png';
import doctor4 from '../Statics/Images/doctor3pic.png';
import eyelogo from '../Statics/Images/eyelogo.png';
import nu1 from '../Statics/Images/nu1.png';
import nu2 from '../Statics/Images/nu2.png';
import nu3 from '../Statics/Images/nu3.png';
import '../CSS/doctor.css';
import book from '../Statics/Images/book.svg';

function Doctors() {
  const doctors = [
    { image: doctor1, name: 'Dr. Jholian', specialty: 'Glaucoma' },
    { image: doctor2, name: 'Dr. Laurance', specialty: 'Clarivu Eye' },
    { image: doctor3, name: 'Dr. Armika', specialty: 'Cataract Surgery' },
    { image: doctor4, name: 'Dr. Catherine', specialty: 'Cataract Surgery' }
  ];

  return (
    <>
      <div className="position-relative py-5">
        <h2 className="mb-4 text-center specialist-text">
          Meet Our <span className="text-primary">Specialists</span>
        </h2>

        <div className="container position-relative">
          <div id="doctorCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item  d-carou active">
                <div className="row justify-content-center">
                  {doctors.map((doctor, index) => (
                    <div className="col-md-3 px-1 d-flex justify-content-center" key={index}>
                      <div className="text-center p-1 rounded shadow bg-white w-100" >
                        <img src={doctor.image} alt={doctor.name} className="img-fluid rounded-top" />
                        <div className="position-relative">
                          <img
                            src={eyelogo}
                            alt="eye"
                            className="position-absolute top-0 start-50 translate-middle bg-primary rounded-circle p-2"
                            style={{ width: '50px', height: '50px', top: '-25px' }}
                          />
                        </div>
                        <div className="pt-4">
                          <h5 className="fw-bold mb-1">{doctor.name}</h5>
                          <p className="text-muted small mb-0">{doctor.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              <div className="carousel-item ">
                <div className="row justify-content-center">
                  {doctors.map((doctor, index) => (
                    <div className="col-md-3 px-1 d-flex justify-content-center" key={index}>
                      <div className="text-center p-1 rounded shadow bg-white w-100" >
                        <img src={doctor.image} alt={doctor.name} className="img-fluid rounded-top" />
                        <div className="position-relative">
                          <img
                            src={eyelogo}
                            alt="eye"
                            className="position-absolute top-0 start-50 translate-middle bg-primary rounded-circle p-2"
                            style={{ width: '50px', height: '50px', top: '-25px' }}
                          />
                        </div>
                        <div className="pt-4">
                          <h5 className="fw-bold mb-1">{doctor.name}</h5>
                          <p className="text-muted small mb-0">{doctor.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              <div className="carousel-item ">
                <div className="row justify-content-center">
                  {doctors.map((doctor, index) => (
                    <div className="col-md-3 px-1 d-flex justify-content-center" key={index}>
                      <div className="text-center p-1 rounded shadow bg-white w-100" >
                        <img src={doctor.image} alt={doctor.name} className="img-fluid rounded-top" />
                        <div className="position-relative">
                          <img
                            src={eyelogo}
                            alt="eye"
                            className="position-absolute top-0 start-50 translate-middle bg-primary rounded-circle p-2"
                            style={{ width: '50px', height: '50px', top: '-25px' }}
                          />
                        </div>
                        <div className="pt-4">
                          <h5 className="fw-bold mb-1">{doctor.name}</h5>
                          <p className="text-muted small mb-0">{doctor.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
              
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#doctorCarousel" data-bs-slide="prev">
          <span style={{borderRadius:"20px"}} className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#doctorCarousel" data-bs-slide="next">
          <span style={{borderRadius:"20px"}} className="carousel-control-next-icon bg-primary p-1" aria-hidden="true"></span>
        </button>
      </div>

      <h2 className="mb-4 text-center specialist-text">News & <span className='text-primary'>Updates</span></h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="news-card p-2">
              <img className="img-fluid rounded nu1" src={nu1} alt="nu1" />
              <h5 className="mt-3 fw-bold">Prepare To Speak With Your Eye Specialist</h5>
              <p className="text-muted">
                <i className="bi bi-calendar3 "></i><img src={book} alt="img" className="image-fluid cal-icon pe-1" /> May 16,2025
              </p>
              <hr/>
              <p className="text-muted">Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.</p>
              <a href="#" className="read-more">Readmore...</a>
            </div>

          </div>
          


          <div className="col-md-4 mb-4">
            <div className="news-card p-2">
              <img className="img-fluid rounded nu2" src={nu2} alt="nu2" />
              <h5 className="mt-3 fw-bold ">Prepare To Speak With Your Eye Specialist</h5>
              <p className="text-muted">
                <i className="bi bi-calendar3 "></i><img src={book} alt="img" className="image-fluid cal-icon pe-1" /> May 17,2025
              </p>
              <hr/>
              <p className="text-muted">Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.</p>
              <a href="#" className="read-more">Readmore...</a>
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="news-card p-2">
              <img className="img-fluid rounded nu3" src={nu3} alt="nu3" />
              <h5 className="mt-3 fw-bold">Prepare To Speak With Your Eye Specialist</h5>
              <p className="text-muted">
                <i className="bi bi-calendar3 "></i><img src={book} alt="img" className="image-fluid cal-icon pe-1" /> May 18,2025
              </p>
              <hr/>
              <p className="text-muted">Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.</p>
              <a href="#" className="read-more">Readmore...</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Doctors;
