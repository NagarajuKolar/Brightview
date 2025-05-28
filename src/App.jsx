import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Doctors from "./Components/Doctors";
import Faq from "./Components/Faq";
import Contactus from "./Components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Appointment from "./Components/Appointment";
import AboutUsPage from "./Pages/AboutusPage";
import ContactusPage from "./Pages/ContactusPage";
import LocationPage from "./Pages/LocationPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/aboutus'element={<AboutUsPage/>}/>
            <Route path='/Contactus' element={<ContactusPage/>}/>
            <Route path='/doctors' element={<LocationPage/>}/>  
            

    </Routes>
    </BrowserRouter>
     
     {/* <Head/>
     <AboutUs/>
     <Services/>
     <Doctors/>
     <Faq/>
     <Contactus/> */}
    </>
  )
}

export default App
