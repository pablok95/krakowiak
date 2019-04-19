import React from 'react';


const OfferSection = ({ section, imageSrc }) => {

    const sectionTxtContent = Object.keys(section).map((item, index) => <p key={index} className="">{section[item]}</p>);

    return (
        <section className="">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-1 col-md-5 col-xl-4 offset-xl-2">
                        <div className="">
                            {sectionTxtContent}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="">
                            <img src={imageSrc} alt="hotel_image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfferSection;