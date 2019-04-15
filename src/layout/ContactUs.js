import React from 'react';
import { getContent } from '../utils/Utils';
import { contactUsContent } from '../content/contactUsContent';
import backgroundImg from '../images/contact-bg2.png';
import ContactForm from './ContactForm';
import SectionTitle from '../components/SectionTitle';

const ContactUs = ({ lang }) => {

    const content = getContent(contactUsContent, lang);
    const { title, subtitle, accommodationReservations, groupReservations, short_address, email, phone1, phone2, phone3 } = content;
    const linkPhone1 = `tel:${content.link_phone1}`;
    const linkPhone2 = `tel:${content.link_phone2}`;
    const linkPhone3 = `tel:${content.link_phone3}`;

    return (
        <section className="contact-us section-padding" style={{ background: `url(${backgroundImg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle title={title} />
                        <h3 className="section-subtitle">{subtitle}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 col-sm-5 offset-sm-0 col-md-5 offset-md-1">
                        <div className="content">
                            <div className="icon-wrapper">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <p className="contact-larger-text">
                                <span className="contact-label">{accommodationReservations}:</span>
                                <a href={linkPhone1} title={`Zadzwoń pod numer ${phone1}`}>+48 {phone1}</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-10 offset-1 col-md-6 col-sm-7 offset-sm-0 offset-md-0">
                        <div className="content">
                            <div className="icon-wrapper">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <p className="contact-larger-text">{short_address}</p>
                        </div>
                    </div>
                </div>

                <div className="row other-wrapper">
                    <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
                        <div className="content">
                            <p className="contact-text">
                                <span className="contact-label">{groupReservations}:</span>
                                <a href={linkPhone2} title={`Zadzwoń pod numer ${phone2}`}>+48 {phone2}</a> | <a href={linkPhone3} title={`Zadzwoń po numer ${phone3}`}>+48 {phone3}</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="content">
                            <p className="contact-text">
                                <span className="contact-label">E-mail:</span>
                                <a href={`mailto:${email}`} title={`Napisz do nas emaila na adres ${email}`}>{email}</a>
                            </p>
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