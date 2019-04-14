import React from 'react';
import { getContent } from '../utils/Utils';
import { contactUsContent } from '../content/contactUsContent';

const ContactUs = (props) => {

    const content = 'cos';
    const { title, subtitle, accommodationReservations, groupReservations, short_address, email, phone1, phone2, phone3 } = content;

    console.log(contactUsContent, getContent, getContent(contactUsContent, props.lang));

    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <span className="contact-label">{accommodationReservations}</span>
                            <span className="contact-larger-text">{phone1}</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="content">
                            <span className="contact-larger-text">{short_address}</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <span className="contact-label">{groupReservations}</span>
                            <span className="contact-text">{phone2} | {phone3}</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="content">
                            <span className="contact-label">E-mail</span>
                            {email}
                        </div>
                    </div>
                </div>

                {/* <div className="row">
                    <form>
                        <input type="text"/>
                    </form>
                </div> */}
            </div>
        </section>
    );
}

export default ContactUs;