import React from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/Utils';
import { roomsContent } from '../content/roomsContent';
import HeaderTitle from '../components/HeaderTitle';
import headerImg from '../images/rooms/rooms-header.png';


const Rooms = props => {
    const content = getContent(roomsContent, props.lang);
    const { title, description, rooms, timeOfDay, currency, measurementTitle } = content;

    const roomsList = rooms.map(room => {
        return (
            <div className="room-list-item">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0 col-lg-5 col-xl-4 offset-xl-1">
                            <div className="">
                                <img src={room.image_md} alt={room.id} />
                            </div>
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-7 offset-md-0 col-lg-7 col-xl-6">
                            <div className="">
                                <h2 className="">{room.name}</h2>
                                <div className="">
                                    <span className="">
                                        {room.price} {currency} / {timeOfDay}
                                    </span>
                                    <span className="">
                                        <b>{measurementTitle}:</b> {room.measurement} m<sup>2</sup>
                                    </span>
                                </div>
                                <p className="">{room.description}</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-12 offset-md-0 col-xl-11">
                            <Link title={room.name} to={{ pathname: `/pokoje/${room.slug}` }} className="">
                                {content.btnText1}
                                <div className=""><i className=""></i></div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <HeaderTitle title={title} description={description} imageSrc={headerImg} />

            <section className="rooms">
                {roomsList}
            </section>
        </div>
    );
}

export default Rooms;