import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Product from './pages/Product';
import Footer from './components/Footer';
import SupportCenter from './pages/SupportCenter';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/support-center" element={<SupportCenter/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;