import React from 'react';
import image from '../images/home-page/urodzinydladzieci.png';


const BirthdayForChildren = ({ content }) => {
    return (
        <section id="birthday-for-children" className="party-room main-padding-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-5 offset-xl-1">
                        <div className="content">
                            <h2 className="title hightlighting">{content.title}</h2>
                            <p className="text">{content.text1}</p>
                            <p className="text">{content.text2}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="img-wrapper">
                            <img className="image" src={image} alt="sala_urodzinowa" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BirthdayForChildren;