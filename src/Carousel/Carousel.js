// src/components/Carousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import img1 from './Kharzatina christmas.jpeg';
import img2 from './Untitled (1).jpeg';
import img3 from './Untitled.jpeg';

const Slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <div className="image-container">
          <img className="SliderImg" src={img1} alt="First slide" />
          <div className="overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>We specialize in crafting
                personalized accessories that
                perfectly match your style.
               </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img className="SliderImg" src={img2} alt="Second slide" />
          <div className="overlay"></div>
        </div>
        <Carousel.Caption>
          <h3> We can customize any necklace,
                bracelet, earring, or anklet of your
                choice, offering unbeatable
                affordability without compromising
                on premium quality.
                </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img className="SliderImg" src={img3} alt="Third slide" />
          <div className="overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>Ensuring that your experience
with us is seamless and enjoyable.
Join our community of satisfied
customers and let us bring your
accessory visions to life.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
