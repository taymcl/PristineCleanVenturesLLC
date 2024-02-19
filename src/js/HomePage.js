import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../img/pristineLLC_slide1.jpg'
import slide2 from '../img/pristineLLC_slide2.jpg'
import slide3 from '../img/pristineLLC_slide3.jpg'
import slide4 from '../img/pristineLLC_slide4.jpg'
import slide5 from '../img/pristineLLC_slide5.jpg'
import slide6 from '../img/pristineLLC_slide6.jpg'
import slide7 from '../img/pristineLLC_slide7.jpg'
import facebook from '../img/facebook.png'

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
                    <div className="col-md-8" style={{background: "#cae5fa"}}>
                        <Carousel fade>
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
                    <div className="col-md-4" style={{background: "#cae5fa"}}>
                        <Carousel>
                            <Carousel.Item>
                                <br/>
                                <h1 id="big-text" style={{textAlign: "center"}}>Welcome to Pristine Clean Ventures LLC!</h1>
                                <h4 id="small-text">We are a commercial and residential cleaning
                                    company,
                                    servicing clients in Massachusetts and Connecticut, dedicated to providing
                                    exceptional cleaning services.
                                    With a commitment to excellence and attention to detail, we ensure
                                    that every space we clean
                                    is left sparkling and spotless. Our team of highly skilled and trained professionals
                                    takes great pride in their
                                    work and goes above and beyond to exceed customer expectations. We understand the
                                    importance of a clean and healthy
                                    environment, and we strive to create a space that is not only visually appealing but
                                    also free from allergens and bacteria.
                                    Customer satisfaction is at the heart of everything we do, and we work closely with
                                    our clients to understand their unique cleaning
                                    needs and preferences. Whether you require maintenance cleaning, deep cleaning, or
                                    specialized services, we tailor our approach to
                                    meet your specific requirements. When you choose Pristine Clean Ventures, you can
                                    trust that your space will receive the utmost care and attention.
                                    We take pride in our professionalism, reliability, and efficiency, and we are
                                    dedicated to delivering a cleaning experience that exceeds your expectations.
                                    Experience the difference with Pristine Clean Ventures.</h4>
                                <br/>
                                <h3 id="big-text" style={{textAlign: "center", color: "navy"}}>!!!PET FRIENDLY!!!</h3>
                                <br/>
                                <br/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <br/>
                                <h1  id="big-text" style={{textAlign: "center"}}>Contact Information</h1>
                                <br/>
                                <br/>
                                <a href="https://www.facebook.com/profile.php?id=61554829619727" id="small-text" style={{fontSize: "50px"}}>
                                    <img src={facebook} alt="facebook" width={"50px"}/>
                                        Facebook
                                </a>
                                <br/>
                                <br/>
                                <h1 id="small-text">Phone: +1 860-265-8342</h1>
                                <br/>
                                <br/>
                                <h2 id="small-text">Email: PCcleaningcompany860@gmail.com</h2>
                                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="row justify-content-center" style={{background: "#cae5fa"}}>
                    <div className="col-md-8 text-overlay" style={{background: "#cae5fa"}}>
                        <h1 id="big-text" className="text-center" style={{margin: '20px auto'}}>Fill out the form to request more info!</h1>
                        <h2 id="big-text" className="text-center" style={{margin: '20px auto'}}>10% off your first cleaning!</h2>
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