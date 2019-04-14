import React from 'react';
import { getContent } from '../utils/Utils';
import { contactPageContent } from '../content/contactPageContent';
import HeaderTitle from '../components/HeaderTitle';
import image from '../images/slider.png';
import ContactUs from '../layout/ContactUs';

const ContactPage = ({ lang }) => {
    const content = getContent(contactPageContent, lang);
    const { title, description, findUsTitle } = content;

    return (
        <div>
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