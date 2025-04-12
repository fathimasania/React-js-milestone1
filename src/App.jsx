// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <PricingSection/>
      <Footer/>
    </>
  );
}

export default App;