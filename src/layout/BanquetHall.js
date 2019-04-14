import React from 'react';
import { Link } from 'react-router-dom';


const BanquetHall = ({ content }) => {
    return (
        <section className="banquet-hall">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="img-wrapper">
                            <img src="" alt="sala_bankietowa" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="content">
                            <h2 className="title">{content.title}</h2>
                            <p className="text">{content.text1}</p>
                            <p className="text">{content.text2}</p>
                            <p className="text">{content.text3}</p>

                            <Link to="/">{content.btnText1}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BanquetHall;