import React from 'react';
import '../CSS/navbar.css'; 
import logo from '../images/logs.png'; 

const Navbar = () => {
  return (
    <>
      <div className="main">
        <img className='image2'src={logo} alt="Logo" /> 
      </div>
    </>
  );
};

export default Navbar;
