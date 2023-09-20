import React from 'react';
import slide1 from '../assets/images/slide-1.jpg';
import slide2 from '../assets/images/slide-2.jpg';

const Slider = () => {

    return (
        <div>
            <section className="hero">
                <div className="hero-slider slick-initialized slick-slider slick-dotted" role="toolbar">
                    <div className="slick-list draggable">
                        <div className="slick-track" style={{ opacity: 1, width: '5100px' }}>
                            <div
                                className="slide-item slick-slide slick-current slick-active"
                                style={{
                                    backgroundImage: `url(${slide1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    width: '2550px',
                                    position: 'relative',
                                    left: '0px',
                                    top: '0px',
                                    zIndex: 999,
                                    opacity: 1,
                                }}
                                data-slick-index="0"
                                aria-hidden="false"
                                tabIndex="-1"
                                role="option"
                                aria-describedby="slick-slide00"
                            >
                                <img src={slide1} alt="" className="slider-bg" />
                            </div>
                            <div
                                className="slide-item slick-slide"
                                style={{
                                    backgroundImage: `url(${slide2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    width: '2550px',
                                    position: 'relative',
                                    left: '-2550px',
                                    top: '0px',
                                    zIndex: 998,
                                    opacity: 0,
                                    transition: 'opacity 500ms linear 0s',
                                }}
                                data-slick-index="1"
                                aria-hidden="true"
                                tabIndex="-1"
                                role="option"
                                aria-describedby="slick-slide01"
                            >
                                <img src={slide2} alt="" className="slider-bg" />
                            </div>
                        </div>
                    </div>
                    {/* Add slick-prev and slick-next buttons here */}
                    <button type="button" className="slick-prev slick-arrow" style={{ display: 'block' }}>
                        Previous
                    </button>
                    <button type="button" className="slick-next slick-arrow" style={{ display: 'block' }}>
                        Next
                    </button>
                  
                </div>
                <div className="wedding-announcement">
                    {/* Add your wedding announcement content here */}
                </div>
            </section>
        </div>
    );
};

export default Slider;
