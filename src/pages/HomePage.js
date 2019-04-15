import React, { Component } from 'react';
import { getContent } from '../utils/Utils';
import { homePageContent } from '../content/homePageContent';
import { getOffset, getViewportHeight } from '../utils/Utils';

import image from '../images/slider.png';
import WhatMakeUsDiffrent from '../layout/WhatMakeUsDiffrent';
import AboutUs from '../layout/AboutUs';
import OurOffer from '../layout/OurOffer';
import BanquetHall from '../layout/BanquetHall';
import BirthdayForChildren from '../layout/BirthdayForChildren';
import ContactUs from '../layout/ContactUs';

class HomePage extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.parralaxEfect, false);
    }

    parralaxEfect = (e) => {
        const offset = getOffset();
        const pageHeight = getViewportHeight();

        const elem = document.getElementById('parralax-el');
        if (elem !== null) {
            const elOffset = elem.offsetTop;
            const elHeight = elem.offsetHeight;

            if ((elOffset > offset + pageHeight) || (elOffset + elHeight < offset)) return;

            elem.style.transform = `translate(-50%, ${Math.round((elOffset - offset) / 8)}px)`;
        }
    }

    render() {
        const content = getContent(homePageContent, this.props.lang);
        const { welcome } = content;

        return (
            <div>
                <div id="parralax" className="slider">
                    <img id="parralax-el" src={image} alt="slider" />
                </div>

                <main className="main-content">
                    <section className="welcome">
                        <div className="container">
                            <div className="content">
                                <h2 className="title">{welcome.title}</h2>
                                <h3 className="subtitle">{welcome.subtitle}</h3>
                                <p className="text">{welcome.text1}</p>
                                <p className="text bold-text">{welcome.text2}</p>
                                <p className="text">{welcome.text3}</p>
                            </div>
                        </div>
                    </section>

                    <WhatMakeUsDiffrent
                        content={content.whatMakeUsDiffrent}
                    />
                    <AboutUs content={content.aboutUs} />
                    <OurOffer />
                    <BanquetHall content={content.banquetHall} />
                    <BirthdayForChildren content={content.birthdayForChildren} />
                    <ContactUs lang={this.props.lang} />
                </main>
            </div>
        );
    }
}

export default HomePage;