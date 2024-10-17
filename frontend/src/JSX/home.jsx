import React from 'react';
import '../CSS/home.css'; // CSS file
import Navbar from './navbar';
import bottle from '../images/bottle.png'; //  image

const Home = () => {
  return (
    <div className='top'>
         <Navbar />
    <div className="home-container">
      <div className="content-container">
        <div className="tagline">
          <h1>Discover Your Signature Scent</h1>
          <p>Experience luxury fragrances crafted to perfection.</p>
        </div>

        <div className="image-container">
          <img className='perfume-image' src={bottle} alt="Perfume bottle" /> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
