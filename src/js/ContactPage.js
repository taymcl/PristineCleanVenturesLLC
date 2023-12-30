import React from 'react';
import '../css/ContactPage.css';
import contact_image from "../img/pristineLLC_contact_img.jpg";

const ContactPage = () => {
  return (
   <div className="img-container">
      <img src={contact_image} alt="clean" width="100%"/>
    </div>
  );
};

export default ContactPage;