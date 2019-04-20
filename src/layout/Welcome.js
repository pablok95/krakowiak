import React from 'react';


const Welcome = ({ content }) => {
    return (
        <section id="welcome">
            <div className="container">
                <div className="welcome-content">
                    <h2 className="welcome-title">
                        <div className="d-inline-block">{content.title}</div>
                        <strong className="d-inline-block hightlighting">{content.hotel_name}</strong>
                    </h2>
                    <h3 className="welcome-subtitle">{content.subtitle}</h3>
                    <p className="welcome-text">{content.text1}</p>
                    <p className="welcome-text">{content.text2}</p>
                    <p className="welcome-text">{content.text3}</p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;