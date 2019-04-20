import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class SeeOtherRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDown: false,
            startX: null,
            scrollLeft: null,
            offsetLeft: null
        }
    }

    componentDidMount() {
        this.slider = document.getElementById('slider');

        this.setState({
            offsetLeft: this.slider.offsetLeft,
        })
    }

    handleMouseDown = (e) => {
        e.currentTarget.classList.add('active');

        this.setState({
            isDown: true,
            startX: e.pageX - this.state.offsetLeft,
            scrollLeft: this.slider.scrollLeft,
        });
    }

    handleMouseLeave = (e) => {
        this.setState({ isDown: false });
        e.currentTarget.classList.remove('active');
    }

    handleMouseUp = (e) => {
        this.setState({ isDown: false });
        e.currentTarget.classList.remove('active');
    }

    handleMouseMove = (e) => {
        if (!this.state.isDown) return;
        e.preventDefault();

        const x = e.pageX - this.state.offsetLeft;
        const walk = (x - this.state.startX) * 2;

        this.slider.scrollLeft = (this.state.scrollLeft - walk);
    }


    render() {
        const { content, rooms } = this.props;

        return (
            <div id="see-other-rooms">
                <div className="container">
                    <h4 className="secondary-title">Zobacz pozostałe pokoje</h4>


                    <div className="horizontal-wrapper">
                        <div className="horizontal" id="slider"
                            onMouseDown={this.handleMouseDown}
                            onMouseLeave={this.handleMouseLeave}
                            onMouseUp={this.handleMouseUp}
                            onMouseMove={this.handleMouseMove}
                        >
                            {rooms.map((room, index) => {
                                return (
                                    <div key={index} className="item" style={{ backgroundImage: `url(${room.image_md})` }}>
                                        <div className="item-content">
                                            <h3 className="title">{room.name}</h3>
                                            <div className="info">
                                                <span className="price">
                                                    {room.price} {content.currency} / {content.timeOfDay}
                                                </span>
                                                <span className="measurement">
                                                    <b>{content.measurementTitle}:</b> {room.measurement}m<sup>2</sup>
                                                </span>
                                            </div>
                                        </div>

                                        <Link className="room-btn" title={room.name} to={{ pathname: `/pokoje/${room.slug}` }}>
                                            <div className="btn-arrow"><i className="icon-arrow"></i></div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeeOtherRoom;