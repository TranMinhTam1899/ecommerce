import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import Product from '../../Products/product';
import { actProductDetail } from '../../../redux/action/productAction';
import { actAddToCart } from '../../../redux/action/cartAction';
import { Container } from 'reactstrap';

const NewProduct = (props) => {

    let { listProducts } = props;

    const onProductDetail = (id) => {
        props.onGetProductDetail(id);
    }

    const onAddToCart = (product, quanty = 1) => {
        props.onAddToCart(product, quanty);
    }

    const showNewProduct = listProducts.map((product, index) => {
        return <Product key={index} product={product}
            onProductDetail={(id) => onProductDetail(id)}
            onAddToCart={(product) => onAddToCart(product)}
        />
    })

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
        ]

    };

    return (
        <section className="newProduct">
            <Container>
                <div className="newProductContent">
                    <h2 className="text-center newProduct__title"> News Product</h2>
                    <div className="pb-5">
                        <Slider {...settings}>
                            {showNewProduct}
                        </Slider>
                    </div>

                </div>
            </Container>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProductDetail: (id) => {
            dispatch(actProductDetail(id));
        },
        onAddToCart: (product, quanty) => {
            dispatch(actAddToCart(product, quanty));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.products.productList,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);