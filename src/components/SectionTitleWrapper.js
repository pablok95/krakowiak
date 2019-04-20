import React, { Component } from 'react';
import { getOffset, findElemPosY } from '../utils/Utils';
import { debounce } from 'lodash';


class SectionTitleWrapper extends Component {
    componentDidMount() {
        const elements = [...document.querySelectorAll('.hightlighting')];

        this.handleHightlighting(elements);
        window.addEventListener('scroll', debounce(() => this.handleHightlighting(elements), 20), false);
    }

    handleHightlighting = (elements) => {
        const scroll = getOffset() + 800;

        elements.forEach(elem => {
            if (findElemPosY(elem) <= scroll) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        });
    }

    render() {
        return (
            <div className="section-title-wrapper">
                <h2 className="section-title hightlighting">{this.props.title}</h2>
                {this.props.subtitle && <h3 className="section-subtitle">{this.props.subtitle}</h3>}
            </div>
        );
    }
}

export default SectionTitleWrapper;

// const SectionTitleWrapper = ({ title, subtitle }) => {
//     return (
//         <div className="section-title-wrapper">
//             <h2 className="section-title hightlighting">{title}</h2>
//             {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
//         </div>
//     );
// }

// export default SectionTitleWrapper;