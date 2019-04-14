import React from 'react';
import SectionWithBackground from '../components/SectionWithBackground';



const AboutUs = ({ content }) => {
    console.log(content);

    const htmlContent = (
        <div className="content">
            <h2 className="title">{content.title}</h2>
            <h3 className="subtitle">{content.subtitle}</h3>
            <p className="text">{content.text1}</p>
            <p className="text">{content.text2}</p>
            <p className="text">{content.text3}</p>
        </div>
    )

    return (
        <SectionWithBackground content={htmlContent} />
    );
}

export default AboutUs;