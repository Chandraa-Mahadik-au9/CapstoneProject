import React from "react";
import { Link } from 'react-router-dom';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';

const Footer = () => {
  return (
    // <div classNameName="row">
    //   <p classNameName="col text-center py-2">Copyright &copy; Deals Wagon</p>
    // </div>
    <footer
      className='text-white text-center text-lg-start' style={{ backgroundColor: "#014f86" }}
     
    >
      <div className='container p-4' style={{ backgroundColor: "#014f86" }}>
        <div className='row'>
          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>DEALS WAGON</h5>
            <p>
              Your destination for faster buying process and bes deals for all
              the products you buy. We promise to provide you the best products
              at best reasonable prices.
            </p>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <Link to='/' style={{ color: "white" }} >Home</Link>
              </li>
              <li>
                <Link to='/aboutus' style={{ color: "white" }} >About Us</Link>
              </li>
              <li>
                <Link to='/contactus' style={{ color: "white" }} >Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2'>Follow Us On : </h5>
            <img src={Facebook} alt='social' style={{ width: "1.5rem", marginLeft: "1rem" }} />
            <img src={Instagram} alt='social' style={{ width: "1.5rem", marginLeft: "1rem" }} />
            <img src={Twitter} alt='social' style={{ width: "1.5rem", marginLeft: "1rem" }} />
            <img src={Youtube} alt='social' style={{ width: "1.5rem", marginLeft: "1rem" }} />
          </div>
        </div>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: "#014f86" }}>
        © 2021 Copyright:DealsWagon
      </div>
    </footer>
  );
};

export default Footer;
