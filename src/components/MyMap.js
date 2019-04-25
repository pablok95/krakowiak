import React, { Component } from 'react';
import ReactMapboxGL, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGL({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });

const mapStyle = {
    width: '100%',
    height: '100%'
};


class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [19.9110597, 49.9802131],
            zoom: [9],
            mounted: false,
        }
    }

    componentDidMount() {
        this.mounted = true;
        this.timeoutHandle = setTimeout(() => {
            this.setState({
                zoom: [16],
                mounted: true,
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }

    render() {
        const { center, zoom } = this.state;

        return (
            <Map
                className="map"
                style={`mapbox://styles/mapbox/light-v10`}
                center={center}
                zoom={zoom}
                containerStyle={mapStyle}
            >
                <Marker coordinates={center}>
                    <div className="marker-map">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                </Marker>
            </Map>
        );
    }
}

export default MyMap;