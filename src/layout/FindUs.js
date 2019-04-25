import React from 'react';
import SectionTitleWrapper from '../components/SectionTitleWrapper';
import MyMap from '../components/MyMap';


const FindUs = ({title}) => {
    return (
        <section id="find-us" className="main-padding">
            <SectionTitleWrapper title={title} />

            <div className="map-wrapper">
                <MyMap />
            </div>
        </section>
    );
}

export default FindUs;