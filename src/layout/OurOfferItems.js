import React from 'react';
import { Link } from 'react-router-dom';


const OurOfferItems = ({ content }) => {
    console.log(content)

    const ourOfferItem = content.rooms.map(room => {
        return (
            <div key={room.id} className="our-offer-item">
                <div className="content">
                    <div className="room-image-wrapper">
                        <img className="room-image" src={room.image} alt={room.slug} />
                    </div>
                    <div className="room-info">
                        <h3 className="room-title">{room.name}</h3>
                        <p className="room-price">{room.price} {content.currency} / {content.timeOfDay}</p>
                    </div>
                    <Link className="room-link btn-with-arrow" to={{ pathname: `/pokoje/${room.slug}` }} title={room.name}><i className="arrow"></i></Link>
                </div>
            </div >
        );
    });

return (
    <div className="our-offer-items">
        {ourOfferItem}
    </div>
);
}

export default OurOfferItems;