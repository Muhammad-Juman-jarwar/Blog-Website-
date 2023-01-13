import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='footer-distributed'>
        <div className='footer-left'>
          <h3>
            Company<span>logo</span>
          </h3>
          
          <div className='footer-links'>
            <a href='#' className='link-1'>
              Home
            </a>
            <a href='#'>Blog</a>
            <a href='#'>Pricing</a>
            <a href='#'>About</a>
            <a href='#'>Faq</a>
            <a href='#'>Contact</a>
          </div>
        </div>
        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker' />
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>
          <div>
            <i className='fa fa-phone' />
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className='fa fa-envelope' />
            <p>
              <a href='mailto:support@company.com'>support@company.com</a>
            </p>
          </div>
        </div>
        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <br />
          <h4>Connect With Us</h4>
          <div className='footer-icons'>
            <a href='#'>
              <i className='fa-brands fa-facebook-f' />
            </a>
            <a href='#'>
              <i className='fa-brands fa-twitter' />
            </a>
            <a href='#'>
              <i className='fa-brands fa-linkedin-in' />
            </a>
          </div>
        </div>
        <p className="para">Copyrgiht © Muhammad Juman: All Rights Reserved </p>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
