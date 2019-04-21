import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import icon from '../images/items/1.png';


const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="map-height" />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 49.9802131, lng: 19.9110597 }}
    >
        <Marker
            position={{ lat: 49.9802131, lng: 19.9110597}}
            icon={icon}
        />
    </GoogleMap>
));


export default Map;