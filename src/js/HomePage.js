import React from 'react';
import home_image from '../img/pristineLLC_home_img.jpg';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="img-container">
      <img src={home_image} alt="clean" width="100%"/>
    </div>
  );
};

export default HomePage;