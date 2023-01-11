import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
import image1 from "./carousel1.jpg";
import image2 from "./carousel2.jpg";
import image3 from "./carousel3.jpg";

const Header = () => {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="imager d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imager d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imager d-block w-100"
            src={image3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Header;