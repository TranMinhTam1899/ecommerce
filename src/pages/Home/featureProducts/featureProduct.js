import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { actAddToCart } from '../../../redux/action/cartAction';
import { actFetchProduct, actProductDetail } from '../../../redux/action/productAction';
import Product from '../../Products/product';

const FeatureProduct = (props) => {
    const { listProducts } = props;

    useEffect(() => {
        props.fetchAllProduct();
    }, [])
    const onProductDetail = (id) => {
        props.onGetProductDetail(id);
    }

    const onAddToCart = (product, quanty = 1) => {
        props.onAddToCart(product, quanty);
    }


    return (
        <section className="feature__product" id="feature">
            <Container>
                <div className="feature__product__wrapper">
                    <div className="feature__product_header">
                        <h2 className="feature__product__title">Feature Products</h2>
                    </div>
                    <div className="feature__product__content">
                        <Row>
                            {
                                listProducts.map((product, index) => {
                                    if (index < 6) {
                                        return <Col md="4" sm="12" xs='12' className="mb-4" key={index}>
                                            <Product
                                                 product={product}
                                                onProductDetail={(id) => onProductDetail(id)}
                                                onAddToCart={(product) => onAddToCart(product)}
                                            />
                                        </Col>
                                    }
                                })
                            }
                        </Row>
                        <div className="w-100 pt-3 text-center">
                            <Link className="btn" to="/product">Xem thêm</Link>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProduct: () => {
            dispatch(actFetchProduct());
        },
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
        listProducts: state.products.productList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProduct);