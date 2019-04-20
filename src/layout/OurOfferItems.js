import React from 'react';
import { Link } from 'react-router-dom';


const OurOfferItems = ({ content }) => {

    const ourOfferItem = content.rooms.map(room => {
        return (
            <div key={room.id} className="our-offer-item">
                <div className="img-wrapper">
                    <img className="image" src={room.image_sm} alt={room.slug} />
                </div>
                <div className="our-offer-description">
                    <h3 className="title">{room.name}</h3>
                    <p className="price">{room.price} {content.currency} / {content.timeOfDay}</p>
                </div>
                <Link className="btn-with-arrow" to={{ pathname: `/pokoje/${room.slug}` }} title={room.name}><i className="arrow"></i></Link>
            </div>
        );
    });

    return (
        <div className="our-offer-items">
            {ourOfferItem}
        </div>
    );
}

export default OurOfferItems;