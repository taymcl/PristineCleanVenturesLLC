import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../img/pristineLLC_slide1.jpg'
import slide2 from '../img/pristineLLC_slide2.jpg'
import slide3 from '../img/pristineLLC_slide3.jpg'
import slide4 from '../img/pristineLLC_slide4.jpg'
import slide5 from '../img/pristineLLC_slide5.jpg'
import slide6 from '../img/pristineLLC_slide6.jpg'
import slide7 from '../img/pristineLLC_slide7.jpg'

import '../css/HomePage.css';


const HomePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    propertyType: '',
                    message: '',
                });
                alert('Form submitted successfully. We will reach out to you soon.');
            } else {
                alert('Error submitting the form. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8" style={{background: "lightgray"}}>
                        <Carousel>
                            <Carousel.Item>
                                <img src={slide1} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide2} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide3} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide4} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide5} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide6} alt="slide1"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide7} alt="slide1"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-4" style={{background: "lightgray"}}>
                         <Carousel style={{  }}>
                            <Carousel.Item>
                                <h1>Welcome to Pristine Clean Ventures LLC!</h1>
                            </Carousel.Item>
                            <Carousel.Item>

                            </Carousel.Item>
                         </Carousel>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-overlay">
                        <h1 className="text-center" style={{margin: '20px auto'}}>Fill out the form to request a quote!</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Phone Number:
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Property Type:
                                <input
                                    type="text"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </label>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="push">
        </div>
        </div>
    )
};

export default HomePage;