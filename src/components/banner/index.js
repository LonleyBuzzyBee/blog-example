import React from 'react';
import logo from '../../assets/s_k_logo.png';

const Banner = () => {
  return (
    <div className='banner-top'>
      <h3>SENSIBLE GARDEN KNOWLEDGE</h3>
      <img className="banner-logo"src={logo}></img>
    </div>
  );
};
export default Banner;