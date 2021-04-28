import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section className="home_carousel_area">
            <Slider {...settings}>
                <div className="slider_item">
                    <div className="slider_item_images">
                        <img src="../asset/images/carousel/fullwidth-item-3.jpg" width="100%" alt="fullwidth-item-3.jpg" />
                        <div className="carousel_hover">
                            <h3 className="text-white text-uppercase">mens bag</h3>
                            <h4 className="text-white">We feature the best professional bags </h4>
                            <Link className="btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="slider_item">
                    <div className="slider_item_images">
                        <img src="../asset/images/carousel/fullwidth-item-2.jpg" width="100%" alt="fullwidth-item-2.jpg" />
                        <div className="carousel_hover">
                            <h3 className="text-white text-uppercase">mens bag</h3>
                            <h4 className="text-white">We feature the best professional bags </h4>
                            <Link className="btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="slider_item">
                    <div className="slider_item_images">
                        <img src="../asset/images/carousel/fullwidth-item-3.jpg" width="100%" alt="fullwidth-item-3.jpg" />
                        <div className="carousel_hover">
                            <h3 className="text-white text-uppercase">mens bag</h3>
                            <h4 className="text-white">We feature the best professional bags </h4>
                            <Link className="btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Carousel;
