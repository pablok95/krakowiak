import React from 'react';


const RoomInfoContent = ({ name, price, measurement, description, currency, timeOfDay, measurementTitle }) => {
    return (
        <div id="room-info-content">
            <div className="content">
                <h3 className="title">{name}</h3>
                <div className="info">
                    <span className="price">
                        {price} {currency} / {timeOfDay}
                    </span>
                    <span className="measurement">
                        <b>{measurementTitle}:</b> {measurement}m<sup>2</sup>
                    </span>
                </div>
                <p className="text">{description}</p>
            </div>
        </div>
    );
}

export default RoomInfoContent;