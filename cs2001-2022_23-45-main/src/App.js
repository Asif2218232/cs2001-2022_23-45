import Navbar from "./Navbar"
import Donation from "./pages/Donation"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Map from "./pages/Map"
import Quiz from "./pages/Quiz"
import Blog from "./pages/Blog"
import Solutions from "./pages/Solutions"
import Newsletter from "./pages/Newsletter.js"
import Payment from "./pages/Payment"
//import React from 'react';
import SocialLinks from './SocialLinks.js';
import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CarbonFootprintCalculator from "./pages/CarbonFootprintCalculator";



import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>

      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carbonfootprintcalculator" element={<CarbonFootprintCalculator />} />
        </Routes>
        <div className="SocialLinks">
          <SocialLinks />
        </div>
      </div>


    </>
  );
}


export default App;
