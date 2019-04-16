import React from 'react';
import image from '../images/home-page/salabankietowa.png';


const BanquetHall = ({ content }) => {
    return (
        <section className="banquet-hall">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-wrapper">
                            <img src={image} alt="sala_bankietowa" />
                        </div>
                    </div>
                    <div className="col-10 offset-1 col-md-5 offset-md-0">
                        <div className="content">
                            <h2 className="section-title hightlighting-line">{content.title}</h2>
                            <p className="text">{content.text1}</p>
                            <p className="text">{content.text2}</p>
                            <p className="text">{content.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BanquetHall;