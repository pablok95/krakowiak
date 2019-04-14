import React from 'react';
import { getContent } from '../utils/Utils';
import { roomsContent } from '../content/roomsContent';
import HeaderTitle from '../components/HeaderTitle';
import image from '../images/slider.png';


const Rooms = props => {
    const content = getContent(roomsContent, props.lang);
    const {title, description, rooms} = content;

    console.log(title, description, rooms);

    return (
        <div>
            <HeaderTitle title={title} description={description} imageSrc={image} />
            Rooms
        </div>
    );
}

export default Rooms;