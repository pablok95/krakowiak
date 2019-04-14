import React from 'react';


const BirthdayForChildren = ({ content }) => {
    return (
        <section className="birthday-for-children">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <h2 className="title">{content.title}</h2>
                            <p className="text">{content.text1}</p>
                            <p className="text">{content.text2}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="img-wrapper">
                            <img src="" alt="sala_urodzinowa" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BirthdayForChildren;