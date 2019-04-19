import React from 'react';
import {getContent} from '../utils/Utils';
import {roomsContent} from '../content/roomsContent';
import OurOfferItems from './OurOfferItems';
import SectionTitleWrapper from '../components/SectionTitleWrapper';

const OurOffer = ({lang, title, subtitle}) => {
    const content = getContent(roomsContent, lang);

    return (
        <section id="our-offer">
            <div className="container">
                <div className="our-offer-content">
                    <SectionTitleWrapper title={title} subtitle={subtitle} />
                    <OurOfferItems content={content} />
                </div>
            </div>
        </section>
    );
}

export default OurOffer;