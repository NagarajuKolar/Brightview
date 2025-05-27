import '../CSS/Appointment.css'
import close from '../Statics/Images/close.svg';
function Appointment({ onClose } ) {
  return (
    <div className="appointment-backdrop">
      <div className="appointment-container">
        <button className="close-button" onClick={onClose} ><img src={close}/></button>
        <h2>
          <span className="text-success">Book</span> <span className="text-warning">Appointment</span>
        </h2>
        <p className="subheading">Enter Your Personal Details</p>

        <form className="appointment-form">
          <label>Full Name *</label>
          <input type="text" placeholder="Ravi" />

          <label>Enter Mail *</label>
          <input type="email" placeholder="Ravi" />

          <label>Phone Number *</label>
        
            <input type="number" placeholder="9800905678" />
          

          <label>Specialities *</label>
          <select>
            <option>Select</option>
          </select>

          <label>Appointment Date *</label>
          <input type="text" placeholder="DD-MM-YYYY" />

          <button type="submit" className="submit-button">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
