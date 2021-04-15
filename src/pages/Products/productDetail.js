import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonColor from '../../component/button/buttonColor';
import Img from '../../component/img/img';
import { actAddToCart } from '../../redux/action/cartAction';

const ProductDetail = (props) => {

    const [product, setProduct] = useState([]);
    const [quanty, setQuanty] = useState(1);

    const onUpdateQuanty = (quanty) => {
        if (quanty > 0) {
            setQuanty(quanty);
        }
    }

    useEffect(() => {
        setProduct(props.product);
    }, [props.product]);

    const onAddToCart = (product, quanty) => {
        props.onAddToCart(product, quanty);

    }

    return (
        <div className="product__detail">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="product__detail__images">
                            <Img Url={product.images} Width={'100%'} />
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="product__detail__info">
                            <div className="product__info__content">
                                <h3>{product.name}</h3>
                                <div className="product__info__star">
                                    <ul className="p_rating">
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="#"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                </div>
                                <h4>$45.05</h4>
                                <p className="product__info__text">
                                    <span>{product.content}</span>
                                </p>
                                <div className="p_color " style={{ display: 'none' }}>
                                    <h4 className="p_d_title">color</h4>
                                    <ul className="color_list">
                                        
                                        <li>
                                            <ButtonColor Color='red' className="btn" />
                                        </li>
                                        <li>
                                            <ButtonColor Color='green' className="btn" />
                                        </li>

                                    </ul>
                                </div>
                                <div className="p_size" style={{ display: 'none' }} >
                                    <h4 className="p_d_title">size</h4>
                                    <select className="selectpicker" >
                                        <option>Select your size</option>
                                        <option value="XL">XL</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="S">S</option>
                                    </select>
                                </div>
                                <div className="quantity">
                                    <div className="custom">
                                        <button className="reduced items-count" type="button" onClick={() => onUpdateQuanty(quanty - 1)}>
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                        <input type="text" name="qty" id="sst" className="input-text qty" maxLength={12} value={quanty} />
                                        <button className="increase items-count" type="button" onClick={() => onUpdateQuanty(quanty + 1)}>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <Link className="add_cart_btn" href="#" onClick={() => onAddToCart(product, quanty)}>add to cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product, quanty) => {
            dispatch(actAddToCart(product, quanty));
        }

    }
}

const mapStateToProps = (state) => {
    return {
        product: state.products.product
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);