import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddToCart} from '../../../redux/action/cartAction';
import {actFetchProduct, actProductDetail} from '../../../redux/action/productAction';
import Product from '../../Products/product';

const FeatureProduct = (props) => {
    const { listProducts } = props;

    useEffect(() => {
        props.fetchAllProduct();
    }, [])
    const onProductDetail = (id) => {
        props.onGetProductDetail(id);
    }

    const onAddToCart = (product, quanty=1) => {
        props.onAddToCart(product, quanty);
    }


    return (
        <section className="feature__product" id="feature">
            <div className="container">
                <div className="feature__product__wrapper">
                    <div className="feature__product_header">
                        <h2 className="feature__product__title">Feature Products</h2>
                    </div>
                    <div className="feature__product__content">
                        <div className="feature__product__grid">
                            {
                                listProducts.map((product, index) => {
                                    if (index < 6) {
                                        return <Product
                                            key={index} product={product}
                                            onProductDetail={(id) => onProductDetail(id)}
                                            onAddToCart={(product) => onAddToCart(product)}
                                        />
                                    }
                                })
                            }
                        </div>
                        <div className="w-100 pt-3 text-center">
                        <Link className="btn_fast" to="/product">Xem thêm</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
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