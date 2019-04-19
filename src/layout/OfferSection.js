import React from 'react';


const OfferSection = ({ section, imageSrc }) => {

    const sectionTxtContent = Object.keys(section).map((item, index) => <p key={index} className="text">{section[item]}</p>);

    return (
        <section id="offer-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-5 col-xl-4 offset-xl-2">
                        <div className="offer-section-content">
                            {sectionTxtContent}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="img-wrapper">
                            <img className="image" src={imageSrc} alt="hotel_image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfferSection;