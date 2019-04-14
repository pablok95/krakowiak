import React from 'react';
import { getContent } from '../utils/Utils';
import { offerPageContent } from '../content/offerPageContent';
import HeaderTitle from '../components/HeaderTitle';
import image from '../images/slider.png';

const OfferPage = props => {
    const content = getContent(offerPageContent, props.lang);
    const { header } = content;

    console.log(header);

    return (
        <div>
            <HeaderTitle title={header.title} description={header.description} imageSrc={image} />
        </div>
    );
}

export default OfferPage;