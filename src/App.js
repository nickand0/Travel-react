// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Price from './components/Price'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destination />
      <Price/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

