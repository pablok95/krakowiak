import React from 'react';
import { getContent } from '../utils/Utils';
import { offerPageContent } from '../content/offerPageContent';

import HeaderTitle from '../components/HeaderTitle';
import SectionWithBackground from '../components/SectionWithBackground';
import SectionTitleWrapper from '../components/SectionTitleWrapper';
import OfferSection from '../layout/OfferSection';

import headerImg from '../images/offer-page/offer-header.png';
import offerImg from '../images/offer-page/struktura-pokoi.png';
import image from '../images/offer-page/1.png';
import Gallery from '../components/Gallery';



const OfferPage = props => {
    const content = getContent(offerPageContent, props.lang);
    const { header, offerSection, section } = content;

    const offerListItems = offerSection.items.map((item, index) =>
        // <li className="list-item" key={index}>* {item.name}</li>
        <li key={index} className="what-make-us-diffrent-name" dangerouslySetInnerHTML={{
            __html: "* " + item.name
        }} />
    );

    const htmlContent = (
        <div className="section-with-background-content">
            <SectionTitleWrapper title={offerSection.title} />
            <ul className="section-with-bgc-list">
                {offerListItems}
            </ul>
            <p className="text" dangerouslySetInnerHTML={{
                __html: offerSection.info
            }} />
        </div>
    );

    return (
        <div id="offer-page">
            <HeaderTitle title={header.title} description={header.description} imageSrc={headerImg} />
            <OfferSection imageSrc={image} section={section} />
            <SectionWithBackground imageSrc={offerImg} content={htmlContent} />
            <Gallery />
        </div>
    );
}

export default OfferPage;