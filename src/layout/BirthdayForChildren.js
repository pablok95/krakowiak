import React from 'react';
import image from '../images/home-page/urodzinydladzieci.png';


const BirthdayForChildren = ({ content }) => {
    return (
        <section className="birthday-for-children">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-1 col-md-5 col-xl-4 offset-xl-2">
                        <div className="content">
                            <h2 className="section-title hightlighting-line">{content.title}</h2>
                            <p className="text">{content.text1}</p>
                            <p className="text">{content.text2}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="img-wrapper">
                            <img src={image} alt="sala_urodzinowa" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BirthdayForChildren;