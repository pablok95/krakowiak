import React from 'react';
import SectionWithBackground from '../components/SectionWithBackground';
import image from '../images/home-page/struktura-pokoi.png';
import SectionTitleWrapper from '../components/SectionTitleWrapper';



const AboutUs = ({ content }) => {

    const htmlContent = (
        <div className="section-with-background-content">
            <SectionTitleWrapper title={content.title} subtitle={content.subtitle} />
            <p className="text">{content.text1}</p>
            <p className="text">{content.text2}</p>
            <p className="text">{content.text3}</p>
        </div>
    )

    return (
        <SectionWithBackground content={htmlContent} imageSrc={image} />
    );
}

export default AboutUs;