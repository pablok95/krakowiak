import React, { Component } from 'react';

import image1 from '../images/gallery/1.png';
import image2 from '../images/gallery/2.png';
import image3 from '../images/gallery/3.png';
import image4 from '../images/gallery/4.png';
// import image5 from '../images/gallery/5.png';

const images = [image1, image2, image3, image4];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesLength: images.length-1,
            isDown: false,
            clientXDown: null,
            leftSlide: 0,
            centerSlide: 1,
            rightSlide: 2,
        }
    }

    componentDidMount() {
        this.slider = document.getElementById('gallery-items');
        this.sliderItems = [...document.querySelectorAll('.gallery-item')];

        this.sliderItems[0].classList.add('left-item');
        this.sliderItems[1].classList.add('active');
        this.sliderItems[2].classList.add('right-item');

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.leftSlide !== this.state.leftSlide) {
            this.sliderItems[prevState.leftSlide].classList.remove('left-item');
            this.sliderItems[prevState.centerSlide].classList.remove('active');
            this.sliderItems[prevState.rightSlide].classList.remove('right-item');

            this.sliderItems[this.state.leftSlide].classList.add('left-item');
            this.sliderItems[this.state.centerSlide].classList.add('active');
            this.sliderItems[this.state.rightSlide].classList.add('right-item');
        }
    }

    handleMouseDown = (e) => {
        e.currentTarget.classList.add('active');

        this.setState({
            isDown: true,
            clientXDown: e.clientX,
            startX: e.pageX - this.state.offsetLeft,
        })
    }

    handleMouseUp = (e) => {
        e.preventDefault();

        if (e.clientX + 70 < this.state.clientXDown) {
            this.scrollLeft();
        } else if (e.clientX + 70 > this.state.clientXDown) {
            this.scrollRight();
        }

        this.setState({ isDown: false });
        e.currentTarget.classList.remove('active');
    }

    handleMouseLeave = (e) => {
        this.setState({ isDown: false });
        e.currentTarget.classList.remove('active');
    }

    handleTouchStart = (e) => {
        this.setState({
            clientXDown: e.touches[0].clientX,
            startX: e.pageX - this.state.offsetLeft,
        })
    }

    handleTouchEnd = (e) => {
        e.preventDefault();

        if (e.changedTouches[0].clientX + 70 < this.state.clientXDown) {
            this.scrollLeft();
        } else if (e.changedTouches[0].clientX + 70 > this.state.clientXDown) {
            this.scrollRight();
        }
    }

    scrollRight = () => {
        this.setState({
            leftSlide: this.state.leftSlide !== 0 ? this.state.leftSlide - 1 : this.state.imagesLength,
            centerSlide: this.state.centerSlide !== 0 ? this.state.centerSlide - 1 : this.state.imagesLength,
            rightSlide: this.state.rightSlide !== 0 ? this.state.rightSlide - 1 : this.state.imagesLength,
        });
    }

    scrollLeft = () => {
        this.setState({
            leftSlide: this.state.leftSlide !== this.state.imagesLength ? this.state.leftSlide + 1 : 0,
            centerSlide: this.state.centerSlide !== this.state.imagesLength ? this.state.centerSlide + 1 : 0,
            rightSlide: this.state.rightSlide !== this.state.imagesLength ? this.state.rightSlide + 1 : 0,
        });
    }

    render() {
        return (
            <section id="gallery">
                <div id="gallery-items" className="gallery-items"
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseLeave={this.handleMouseLeave}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd}
                >
                    {images.map((image, index) => {
                        return (
                            <div key={index} className="gallery-item">
                                <div className="gallery-picture" style={{ backgroundImage: `url(${image})` }}></div>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Gallery;