import React from 'react';


const Welcome = ({content}) => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="content">
                    <h2 className="title">{content.title} <span className="hotel-name hightlighting-line">{content.hotel_name}</span></h2>
                    <h3 className="subtitle">{content.subtitle}</h3>
                    <p className="text">{content.text1}</p>
                    <p className="text bold-text">{content.text2}</p>
                    <p className="text">{content.text3}</p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;