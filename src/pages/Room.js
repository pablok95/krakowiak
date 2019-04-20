import React from 'react';
import { getContent } from '../utils/Utils';
import { roomsContent } from '../content/roomsContent';
import HeaderTitle from '../components/HeaderTitle';
import RoomInfoContent from '../components/RoomInfoContent';

import headerImg from '../images/rooms/rooms-header.png';
import SeeOtherRoom from '../components/SeeOtherRooms';


const Room = ({ lang }) => {
    const reg = /(\w+)([^/])+$/gi;
    const result = reg.exec(window.location.pathname);
    const slug = result[0];

    const content = getContent(roomsContent, lang);

    const roomsList = content.rooms;
    const roomsWithoutCurrent = roomsList.filter(room => room.slug !== slug);
    const roomContent = roomsList.filter(room => room.slug === slug)[0];

    const { image_md, name, description, price, measurement, details_items } = roomContent;
    const { timeOfDay, measurementTitle, currency } = content;

    return (
        <div id="room-page">
            <HeaderTitle title={content.title} description={content.description} imageSrc={headerImg} />

            <section className="main-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 col-sm-12 offset-sm-0 col-md-6">
                            <div className="img-wrapper room-img">
                                <img src={image_md} alt="room_image" className="image" />
                            </div>
                        </div>

                        <div className="col-10 offset-1 col-sm-12 offset-sm-0 col-md-6 col-xl-5">
                            <RoomInfoContent name={name} price={price} measurement={measurement} description={description} currency={currency} timeOfDay={timeOfDay} measurementTitle={measurementTitle} />
                        </div>

                        <div className="col-10 offset-1 col-sm-12 offset-sm-0 col-md-12">
                            <div className="room-details">
                                <h4 className="secondary-title">Szczegóły pokoju</h4>

                                <div className="row">
                                    {details_items.map((detail, index) =>
                                        <div key={index} className="col-12 col-sm-6 col-md-3">
                                            <div className="detail-content text">&bull; {detail.item}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SeeOtherRoom rooms={roomsWithoutCurrent} content={{ timeOfDay, measurementTitle, currency }} />
            </section>
        </div>
    );
}

export default Room;