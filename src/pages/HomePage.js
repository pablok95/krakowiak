import React, { Component } from 'react';
import { getContent } from '../utils/Utils';
import { homePageContent } from '../content/HomePage';
import { getOffset, getViewportHeight} from '../utils/Utils';

import image from '../images/slider.png';

class HomePage extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.parralaxEfect, false);
    }

    parralaxEfect = (e) => {
        const offset = getOffset();
        const pageHeight = getViewportHeight();

        const elem = document.getElementById('parralax-el');
        if(elem !== null) {
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
            <div style={{ height: '200vh' }}>
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
                    <section>
                        <h2>Co nas wyróżnia</h2>
                    </section>
                </main>

                {welcome.text1}
                <b>{welcome.text2}</b>
            </div>
        );
    }
}

export default HomePage;