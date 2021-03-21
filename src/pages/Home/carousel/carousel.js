import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';



const Carousel = () => {
    return (
        <section className="home_carousel_area">
            <ReactOwlCarousel className="home_carousel_slider" items={1} loop nav dots  autoplay autoplayTimeout={8000} >
                <div className="item">
                    <div className="h_carousel_item">
                        <img src="../asset/images/carousel/fullwidth-item-3.jpg" width="100%" alt="fullwidth-item-3.jpg" />
                        <div className="carousel_hover">
                            <h3>mens bag</h3>
                            <h4>We feature the best professional bags </h4>
                            <h5>Including:</h5>
                            <p>Adidas, Century, Everlast, Fairtex, Fighting Sports, WaveMaster, Twins, Rival</p>
                            <Link className="discover_btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="h_carousel_item">
                        <img src="../asset/images/carousel/fullwidth-item-2.jpg" width="100%" alt="fullwidth-item-2.jpg"/>
                        <div className="carousel_hover">
                            <h3>mens bag</h3>
                            <h4>We feature the best professional bags </h4>
                            <h5>Including:</h5>
                            <p>Adidas, Century, Everlast, Fairtex, Fighting Sports, WaveMaster, Twins, Rival</p>
                            <Link className="discover_btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="h_carousel_item">
                    <img src="../asset/images/carousel/fullwidth-item-3.jpg" width="100%" alt="fullwidth-item-3.jpg"/>
                        <div className="carousel_hover">
                            <h3>mens bag</h3>
                            <h4>We feature the best professional bags </h4>
                            <h5>Including:</h5>
                            <p>Adidas, Century, Everlast, Fairtex, Fighting Sports, WaveMaster, Twins, Rival</p>
                            <Link className="discover_btn" to="#">discover now</Link>
                        </div>
                    </div>
                </div>
            </ReactOwlCarousel>
        </section>


    )
}

export default Carousel;
