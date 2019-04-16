import React from 'react';
import SectionWithBackground from '../components/SectionWithBackground';
import image from '../images/home-page/struktura-pokoi.png';



const AboutUs = ({ content }) => {

    const htmlContent = (
        <div className="content">
            <h2 className="section-title hightlighting-line">{content.title}</h2>
            <h3 className="section-subtitle">{content.subtitle}</h3>
            <p className="text">{content.text1}</p>
            <p className="text">{content.text2}</p>
            <p className="text">{content.text3}</p>
        </div>
    )

    return (
        <SectionWithBackground content={htmlContent} image={image} />
    );
}

export default AboutUs;