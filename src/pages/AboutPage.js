import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { getContent } from '../utils/Utils';
import { aboutPageContent } from '../content/aboutPageContent';
import SectionWithBackground from '../components/SectionWithBackground';
import Gallery from '../components/Gallery';
import image from '../images/slider.png';


const AboutPage = props => {
    const content = getContent(aboutPageContent, props.lang);
    const { header, section, offerSection } = content;

    const offerListItems = offerSection.items.map((item, index) =>
        <li key={index}>{item.name}</li>
    );

    const htmlContent = (
        <div className="content">
            <h2 className="title">{offerSection.title}</h2>
            <h3 className="subtitle">{offerSection.subtitle}:</h3>
            <ul className="list-offer">
                {offerListItems}
            </ul>
        </div>
    );

    return (
        <div>
            <HeaderTitle title={header.title} description={header.description} imageSrc={image} />

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="content">
                                <p>{section.text1}</p>
                                <p>{section.text2}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="img-wrapper">
                                <img src="" alt="hotel_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionWithBackground content={htmlContent} />
            <Gallery />
        </div>
    );
}

export default AboutPage;