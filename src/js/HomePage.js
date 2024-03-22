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
        address: '',
        propertyType: '',
        additionalFields: {
            bedrooms: '',
            bathrooms: '',
            sqFootage: '',
            offices: '',
        },
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name in formData || name === 'propertyType') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                additionalFields: {
                    ...prevData.additionalFields,
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    propertyType: formData.propertyType,
                    ...formData.additionalFields,
                }),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    propertyType: '',
                    additionalFields: {
                        bedrooms: '',
                        bathrooms: '',
                        sqFootage: '',
                        offices: '',
                    },
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
                        <div>
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
                            <br/>
                            <h3 id="big-text" style={{textAlign: "center", color: "navy"}}>As always, no extra charge
                                for furry friends!</h3>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{background: "#cae5fa"}}>
                    <div className="col-md-8 text-overlay" style={{background: "#cae5fa", textAlign: "center"}}>
                        <h1 id="big-text" style={{textAlign: "center"}}>Contact Information and Social Media</h1>
                        <a href="https://www.facebook.com/profile.php?id=61554829619727" id="small-text"
                           style={{fontSize: "50px", justifyContent: "center"}}>
                            <img src={facebook} alt="facebook" width={"50px"}/>
                            Facebook
                        </a>
                        <h1 id="small-text">Phone: +1 860-265-8342</h1>
                        <h1 id="small-text">Email: PCcleaningcompany860@gmail.com</h1>
                        <h1 id="big-text" className="text-center" style={{margin: '20px auto'}}>Fill out the form to
                            request more info!</h1>
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
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Property Type:
                                <select
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Property Type</option>
                                    <option value="residential">Residential</option>
                                    <option value="office">Office</option>
                                </select>
                            </label>
                            {formData.propertyType === 'residential' && (
                                <>
                                    <label>
                                        Bedrooms:
                                        <input
                                            type="number"
                                            name="bedrooms"
                                            value={formData.additionalFields.bedrooms}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Bathrooms:
                                        <input
                                            type="number"
                                            name="bathrooms"
                                            value={formData.additionalFields.bathrooms}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Sq. Footage:
                                        <input
                                            type="number"
                                            name="sqFootage"
                                            value={formData.additionalFields.sqFootage}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </>
                            )}
                            {formData.propertyType === 'office' && (
                                <>
                                    <label>
                                        Offices:
                                        <input
                                            type="number"
                                            name="offices"
                                            value={formData.additionalFields.offices}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Bathrooms:
                                        <input
                                            type="number"
                                            name="bathrooms"
                                            value={formData.additionalFields.bathrooms}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Sq. Footage:
                                        <input
                                            type="number"
                                            name="sqFootage"
                                            value={formData.additionalFields.sqFootage}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </>
                            )}
                            <button type="submit">Submit</button>
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