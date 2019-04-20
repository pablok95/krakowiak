import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { getContent } from '../utils/Utils';
import { aboutPageContent } from '../content/aboutPageContent';

import SectionWithBackground from '../components/SectionWithBackground';
import Gallery from '../components/Gallery';
import SectionTitleWrapper from '../components/SectionTitleWrapper';

import headerImg from '../images/about-page/header.png';
import image from '../images/about-page/1.png';
import offerImg from '../images/about-page/struktura-pokoi.png';
import OfferSection from '../layout/OfferSection';


const AboutPage = props => {
    const content = getContent(aboutPageContent, props.lang);
    const { header, section, offerSection } = content;

    const offerListItems = offerSection.items.map((item, index) =>
        <li className="list-item" key={index}>* {item.name}</li>
    );

    const htmlContent = (
        <div className="section-with-background-content">
            <SectionTitleWrapper title={offerSection.title} subtitle={offerSection.subtitle} />
            <ul className="section-with-bgc-list">
                {offerListItems}
            </ul>
        </div>
    );

    return (
        <div id="about-page">
            <HeaderTitle title={header.title} description={header.description} imageSrc={headerImg} />

            <OfferSection imageSrc={image} section={section} />

            <SectionWithBackground imageSrc={offerImg} content={htmlContent} />
            <Gallery />
        </div>
    );
}

export default AboutPage;