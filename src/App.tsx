import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import Home  from "./components/pages/Home/home";
import {AddToCart} from "./components/pages/Card/AddTocard";
import { Contact } from "./components/pages/Contact/contact";
import { Foods } from "./components/pages/Foods/foods";
import { Navbar } from "./components/Layout/Navbar/navbar";
import  Login  from "./components/pages/Profile/Login";
import  Checkout from "./components/pages/Checkout/checkout";
import Footer from './components/Layout/Footer/footer';
function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/AddToCart" element={< AddToCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
       <Footer/>
      </React.Fragment>
    </Router>

     
  );
}

export default App;

