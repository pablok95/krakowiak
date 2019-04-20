import React from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/Utils';
import { roomsContent } from '../content/roomsContent';
import HeaderTitle from '../components/HeaderTitle';
import headerImg from '../images/rooms/rooms-header.png';
import RoomInfoContent from '../components/RoomInfoContent';


const Rooms = props => {
    const content = getContent(roomsContent, props.lang);
    const { title, description, rooms, timeOfDay, currency, measurementTitle } = content;

    const roomsList = rooms.map((room, index) => {
        return (
            <div key={index} className="room-item">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0 col-lg-5 col-xl-4 offset-xl-1">
                            <div className="img-wrapper">
                                <img className="image" src={room.image_md} alt={room.id} />
                            </div>
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-7 offset-md-0 col-lg-7 col-xl-6">
                            <RoomInfoContent name={room.name} price={room.price} measurement={room.measurement} description={room.description} currency={currency} timeOfDay={timeOfDay} measurementTitle={measurementTitle} />
                        </div>

                        <div className="col-12 col-sm-10 offset-sm-1 col-md-12 offset-md-0 col-xl-11">
                            <div className="content">
                                <Link title={room.name} to={{ pathname: `/pokoje/${room.slug}` }} className="btn btn-2">
                                    <div className="btn-text">{content.btnText1}</div>
                                    <div className="btn-arrow"><i className="icon-arrow"></i></div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <HeaderTitle title={title} description={description} imageSrc={headerImg} />

            <section id="rooms">
                {roomsList}
            </section>
        </div>
    );
}

export default Rooms;