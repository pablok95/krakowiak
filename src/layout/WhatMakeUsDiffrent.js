import React from 'react';
import SectionTitleWrapper from '../components/SectionTitleWrapper';


const WhatMakeUsDiffrent = ({ content }) => {

    const items = content.items.map((item, index)=> {
        return (
            <div key={index} className="col-6 col-md-3 what-make-us-diffrent-item">
                <div className="what-make-us-diffrent-content">
                    <img className="what-make-us-diffrent-image" src={item.imgSrc} alt={item.name} />
                    <div className="what-make-us-diffrent-name" dangerouslySetInnerHTML={{
                        __html: item.name
                    }} />
                </div>
            </div>
        )
    })

    return (
        <section id="what-make-us-diffrent">
            <div className="container">
                <SectionTitleWrapper title={content.title} />
                <div className="row">
                    {items}
                </div>
            </div>
        </section>
    );
}

export default WhatMakeUsDiffrent;