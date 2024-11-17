// src/components/HomePageCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePageCarousal.css';
import image2slide from '../../assets/image2slide.jpg';
import image1slide from '../../assets/image1slide.jpg';
import image3slide from '../../assets/image3slide.png';






const HomePageCarousel = () => {
  return (
    <Carousel>
      {/* Slide 1: Welcome Stoma Connect */}
      <Carousel.Item>
      <img
      className="d-block w-100 carousel-image"
      src={image1slide}
      alt="Colon Cancer Awareness"
      />
      <Carousel.Caption>
          <h1>Welcome to Stoma Connect</h1>
          <p>Your Trusted Colostomy Care Platform</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2: Colon Cancer Awareness */}
      <Carousel.Item>
      <img
      className="d-block w-100 carousel-image"
      src={image2slide}
      alt="Colon Cancer Awareness"
      />
        <Carousel.Caption>
          <h1>Colon Cancer Care</h1>
          <p>Learn more about early detection, prevention, and support.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3: Additional Slide */}
      <Carousel.Item>
      <img
      className="d-block w-100 carousel-image"
      src={image3slide}
      alt="Colon Cancer Awareness"
      />
        <Carousel.Caption>
          <h1>Colon Cancer Awareness</h1>
          <p>Learn more about early detection, prevention, and support.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
