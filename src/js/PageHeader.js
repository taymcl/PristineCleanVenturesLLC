import React, {useEffect} from 'react';
import '../css/PageHeader.css';
import logo_image from "../img/pristineLLC_logo.jpg"; // Import the CSS file

const PageHeader = () => {
    useEffect(() => {
        document.querySelector('.name').classList.add('fade-in');
        document.querySelector('.slogan').classList.add('fade-in');
        document.querySelector('.logo').classList.add('fade-in');
    }, []);

    return (
        <div>
            <div className="header">
                <h1 className="name">PRISTINE CLEAN VENTURES LLC</h1>
                <h2 className="slogan">"A refreshing touch of Pristine Clean awaits..."</h2>
                <div className="logo">
                    <img src={logo_image} alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;