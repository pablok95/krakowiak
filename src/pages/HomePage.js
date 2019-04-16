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
import Welcome from '../layout/Welcome';

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

            elem.style.transform = `translate(-50%, ${Math.round((elOffset - offset) / 20 * -8)}px)`;
        }
    }

    render() {
        const content = getContent(homePageContent, this.props.lang);

        return (
            <div>
                <div id="parralax" className="slider">
                    <img id="parralax-el" src={image} alt="slider" />
                </div>

                <main className="main-content">
                    <Welcome content={content.welcome} />
                    <WhatMakeUsDiffrent
                        content={content.whatMakeUsDiffrent}
                    />
                    <AboutUs content={content.aboutUs} />
                    <OurOffer lang={this.props.lang} title={content.ourOffer.title} subtitle={content.ourOffer.subtitle} />
                    <BanquetHall content={content.banquetHall} />
                    <BirthdayForChildren content={content.birthdayForChildren} />
                    <ContactUs lang={this.props.lang} />
                </main>
            </div>
        );
    }
}

export default HomePage;