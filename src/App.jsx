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
import AboutUsPage from "./Components/AboutUsPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/aboutus'element={<AboutUsPage/>}/>
            

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
