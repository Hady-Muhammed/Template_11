import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Developers from './components/Developers';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Developers/>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
