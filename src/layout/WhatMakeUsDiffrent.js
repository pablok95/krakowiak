import React from 'react';


const WhatMakeUsDiffrent = ({ content }) => {

    const items = content.items.map((item, index)=> {
        return (
            <div key={index} className="item">
                <div className="content">
                    <img className="item-img" src={item.imgSrc} alt={item.name} />
                    <div className="item-name" dangerouslySetInnerHTML={{
                        __html: item.name
                    }} />
                </div>
            </div>
        )
    })

    return (
        <section className="what-make-us-diffrent">
            <div className="container">
                <h2>{content.title}</h2>
                <div className="items-wrapper">
                    {items}
                </div>
            </div>
        </section>
    );
}

export default WhatMakeUsDiffrent;