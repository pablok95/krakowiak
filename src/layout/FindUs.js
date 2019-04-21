import React from 'react';
import SectionTitleWrapper from '../components/SectionTitleWrapper';
import Map from '../components/Map';


const FindUs = ({title}) => {
    return (
        <section id="find-us" className="main-padding">
            <SectionTitleWrapper title={title} />

            <div className="map-wrapper">
                <Map />
            </div>
        </section>
    );
}

export default FindUs;