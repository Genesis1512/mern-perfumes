import React from 'react';
import '../CSS/banner.css'
import leftCornerImage from '../images/leftcorner.png';
import rightCornerImage from '../images/right corner.png';

const CTA = () => {
  return (
    <div className="cta-banner">
      {/* Bottom Corner Images */}
      <img className="left-corner-image" src={leftCornerImage} alt="Left Corner" />
      
      <div className="cta-content">
        <h2>Explore Our Latest Collections</h2>
        <p>Don't miss out on exclusive offers and new arrivals. Discover your perfect scent now!</p>
        <h2 className="cta-button">Shop Now</h2>
      </div>
      
      <img className="right-corner-image" src={rightCornerImage} alt="Right Corner" />
    </div>
  );
};

export default CTA;
