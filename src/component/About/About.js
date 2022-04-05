import React from 'react';
import "./about.css"
import about from "../../asset/images/about.jpg"

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center fw-bold text-primary my-5'>ABOUT US</h1>
            <div className="w-100">
                <img src={about} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default About;