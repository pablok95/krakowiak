import React, { Component } from 'react';
import { getContent } from '../utils/Utils';
import { homePageContent } from '../content/homePageContent';
import { getOffset, getViewportHeight } from '../utils/Utils';
import { debounce } from 'lodash';

import image from '../images/slider.png';
import WhatMakeUsDiffrent from '../layout/WhatMakeUsDiffrent';
import AboutUs from '../layout/AboutUs';
import OurOffer from '../layout/OurOffer';
import BanquetHall from '../layout/BanquetHall';
import BirthdayForChildren from '../layout/BirthdayForChildren';
import ContactUs from '../layout/ContactUs';
import Welcome from '../layout/Welcome';
import Gallery from '../components/Gallery';

class HomePage extends Component {

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.parallaxEfect, 5), false);
    }

    parallaxEfect = (e) => {
        const offset = getOffset();
        const pageHeight = getViewportHeight();

        const elem = document.getElementById('parallax-el');
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
            <div id="home-page">
                <div id="parallax" className="parallax">
                    <img id="parallax-el" className="parallax-el" src={image} alt="slider" />
                </div>

                <main className="main-content">
                    <Welcome content={content.welcome} />
                    <WhatMakeUsDiffrent content={content.whatMakeUsDiffrent} />
                    <AboutUs content={content.aboutUs} />
                    <OurOffer lang={this.props.lang} title={content.ourOffer.title} subtitle={content.ourOffer.subtitle} />
                    <BanquetHall content={content.banquetHall} />
                    <BirthdayForChildren content={content.birthdayForChildren} />
                    <Gallery />
                    <ContactUs lang={this.props.lang} />
                </main>
            </div>
        );
    }
}

export default HomePage;