import React from 'react';
import {getContent} from '../utils/Utils';
import { contactPageContent} from '../content/contactPageContent';
import HeaderTitle from '../components/HeaderTitle';
import image from '../images/slider.png';

const ContactPage = props => {
    const content = getContent(contactPageContent, props.lang);
    const {title, description, findUs} = content;

    return (
        <div>
            <HeaderTitle title={title} description={description} imageSrc={image} />
        </div>
    );
}

export default ContactPage;