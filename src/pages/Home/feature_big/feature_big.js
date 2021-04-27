import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'reactstrap';

const FeatureBig = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };


    return (
        <section className="feature_big pt-5">
            <Container>
                <div className="feature_big_content">
                    <Slider {...settings}>
                        <div className="feature_big_item px-2">
                            <div className="feature_img">
                                <img src="../asset/images/featureBig/f-add-8.jpg" className="w-100" alt="" />
                            </div>
                        </div>
                        <div className="feature_big_item px-2">
                            <div className="feature_img">
                                <img src="../asset/images/featureBig/f-add-9.jpg" className="w-100" alt="" />
                            </div>
                        </div>
                        <div className="feature_big_item px-2">
                            <div className="feature_img">
                                <img src="../asset/images/featureBig/f-add-8.jpg" className="w-100" alt="" />
                            </div>
                        </div>
                        <div className="feature_big_item px-2">
                            <div className="feature_img">
                                <img src="../asset/images/featureBig/f-add-9.jpg" className="w-100" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>

        </section>
    )
}

export default FeatureBig;
