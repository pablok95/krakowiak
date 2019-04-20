import React from 'react';
import { getContent } from '../utils/Utils';
import { contactPageContent } from '../content/contactPageContent';
import HeaderTitle from '../components/HeaderTitle';
import ContactUs from '../layout/ContactUs';

import image from '../images/contact-page/contact-header.png';
import FindUs from '../layout/FindUs';



const ContactPage = ({ lang }) => {
    const content = getContent(contactPageContent, lang);
    const { title, description, findUsTitle } = content;

    return (
        <div id="contact-page">
            <HeaderTitle title={title} description={description} imageSrc={image} />
            <FindUs title={findUsTitle} />
            <ContactUs lang={lang} />
        </div>
    );
}

export default ContactPage;