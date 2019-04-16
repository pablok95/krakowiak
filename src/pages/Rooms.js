import React from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/Utils';
import { roomsContent } from '../content/roomsContent';
import HeaderTitle from '../components/HeaderTitle';
import image from '../images/slider.png';


const Rooms = props => {
    const content = getContent(roomsContent, props.lang);
    const { title, description, rooms, timeOfDay, currency, measurementTitle } = content;

    console.log(rooms);
    const roomsList = rooms.map(room => {
        return (
            <div className="room-list-item">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0 col-lg-5 col-xl-4 offset-xl-1">
                            <div className="img-wrapper">
                                <img src={room.image_md} alt={room.id} />
                            </div>
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-7 offset-md-0 col-lg-7">
                            <div className="description-wrapper">
                                <h2 className="room-name">{room.name}</h2>
                                <div className="room-info">
                                    <span className="room-price">
                                        {room.price} {currency} / {timeOfDay}
                                    </span>
                                    <span className="room-measurement">
                                        <b>{measurementTitle}:</b> {room.measurement} m<sup>2</sup>
                                    </span>
                                </div>
                                <p className="description text">{room.description}</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-12 offset-md-0">
                            <Link title={room.name} to={{ pathname: `/pokoje/${room.slug}` }} className="btn-1">
                                {content.btnText1}
                                <div className="btn-with-arrow"><i className="arrow"></i></div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <HeaderTitle title={title} description={description} imageSrc={image} />

            <section className="rooms">
                {roomsList}
            </section>
        </div>
    );
}

export default Rooms;