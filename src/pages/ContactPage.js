import React from 'react';
import { getContent } from '../utils/Utils';
import { contactPageContent } from '../content/contactPageContent';
import HeaderTitle from '../components/HeaderTitle';
import ContactUs from '../layout/ContactUs';

import image from '../images/contact-page/contact-header.png';



const ContactPage = ({ lang }) => {
    const content = getContent(contactPageContent, lang);
    const { title, description } = content;

    return (
        <div id="contact-page">
            <HeaderTitle title={title} description={description} imageSrc={image} />
            {/* <section>
                <div className="container-fluid">
                    <h2>{findUsTitle}</h2>
                </div>
            </section> */}
            <ContactUs lang={lang} />
        </div>
    );
}

export default ContactPage;