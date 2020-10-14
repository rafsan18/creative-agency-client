import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "./CompletedWorks.css";

const CompletedWorks = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        arrows: false,
    };
    return (
        <div className="mb-5 py-5 carousel-container  ">
            <h3 className="text-white text-center my-5 pb-5">
                Here are some of <span className="text-brand">our works</span>
            </h3>
            <Slider className="mt-5" {...settings}>
                <div>
                    <img
                        src={carousel1}
                        className="carousel-img"
                        alt="Carousel-1"
                    />
                </div>
                <div>
                    <img
                        src={carousel2}
                        className="carousel-img"
                        alt="Carousel-2"
                    />
                </div>
                <div>
                    <img
                        src={carousel3}
                        className="carousel-img"
                        alt="Carousel-3"
                    />
                </div>
                <div>
                    <img
                        src={carousel4}
                        className="carousel-img"
                        alt="Carousel-4"
                    />
                </div>
                <div>
                    <img
                        src={carousel5}
                        className="carousel-img"
                        alt="Carousel-5"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default CompletedWorks;
