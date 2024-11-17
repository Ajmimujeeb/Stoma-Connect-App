// src/components/Home.jsx
import React from 'react';
import HomePageCarousel from './Carousel/HomePageCarousel';
import Topbags from './Product card/Topbags';
import NurseSection from './Nurse page/NurseSection';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';


const Home = () => {
  return (
    <div>
      <div style={{ margin: 0, padding: 0 }}></div>
      <HomePageCarousel/>
      <Topbags/>
       <NurseSection />
       <Footer />
       <Cart />
      
      {/* Other homepage content can go here */}
    </div>
  );
};

export default Home;
