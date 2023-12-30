import React from 'react';
import '../css/AboutPage.css';
import about_image from "../img/pristineLLC_about_img.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="img-container">
      <img src={about_image} alt="clean" width="100%"/>
    </div>
    </div>
  );
};

export default AboutPage;