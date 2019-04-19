import React from 'react';
import { getContent } from '../utils/Utils';
import { contactUsContent } from '../content/contactUsContent';
import backgroundImg from '../images/contact-bg2.png';
import ContactForm from './ContactForm';
import SectionTitleWrapper from '../components/SectionTitleWrapper';

const ContactUs = ({ lang }) => {

    const content = getContent(contactUsContent, lang);
    const { title, subtitle, accommodationReservations, groupReservations, short_address, email, phone1, phone2, phone3 } = content;
    const linkPhone1 = `tel:${content.link_phone1}`;
    const linkPhone2 = `tel:${content.link_phone2}`;
    const linkPhone3 = `tel:${content.link_phone3}`;

    return (
        <section id="contact-us" style={{ background: `url(${backgroundImg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitleWrapper title={title} subtitle={subtitle} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 col-sm-5 offset-sm-0 col-md-5 offset-md-1">
                        <div className="contact-data-wrapper">
                            <div className="icon-wrapper">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <p className="contact-data-info">
                                <span className="contact-label">{accommodationReservations}:</span>
                                <a className="link phone" href={linkPhone1} title={`Zadzwoń pod numer ${phone1}`}>+48 {phone1}</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-10 offset-1 col-sm-7 offset-sm-0 col-md-6 offset-md-0">
                        <div className="contact-data-wrapper">
                            <div className="icon-wrapper">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <p className="contact-data-info">
                                <span className="address">{short_address}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row contact-other-wrapper">
                    <div className="col-12 col-md-5 offset-md-1 col-lg-5 offset-lg-1">
                        <div className="content">
                            <span className="contact-label">{groupReservations}:</span>
                            <a className="link" href={linkPhone2} title={`Zadzwoń pod numer ${phone2}`}>+48 {phone2}</a> | <a className="link" href={linkPhone3} title={`Zadzwoń po numer ${phone3}`}>+48 {phone3}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="content">
                            <span className="contact-label">E-mail:</span>
                            <a className="link" href={`mailto:${email}`} title={`Napisz do nas emaila na adres ${email}`}>{email}</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ContactForm lang={lang} />
                </div>
            </div>
        </section>
    );
}

export default ContactUs;