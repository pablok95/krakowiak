import React from 'react';
import {getContent} from '../utils/Utils';
import {roomsContent} from '../content/roomsContent';
import OurOfferItems from './OurOfferItems';

const OurOffer = ({lang, title, subtitle}) => {
    const content = getContent(roomsContent, lang);

    return (
        <section className="our-offer section-padding">
            <div className="container">
                <div className="content">
                    <div className="title-wrapper">
                        <h2 className="section-title hightlighting-line">{title}</h2>
                        <h3 className="section-subtitle">{subtitle}</h3>
                    </div>

                    <OurOfferItems content={content} />
                </div>
            </div>
        </section>
    );
}

export default OurOffer;