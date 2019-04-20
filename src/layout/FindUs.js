import React, { Component } from 'react';
import SectionTitleWrapper from '../components/SectionTitleWrapper';


class FindUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <section id="find-us" className="main-padding">
                <SectionTitleWrapper title={this.props.title} />

                <div className="map-wrapper">
                    Mapa
                </div>
            </section>
        );
    }
}

export default FindUs;