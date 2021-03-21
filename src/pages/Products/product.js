import React from 'react';
import Img from '../../component/img/img';
import ButtonIcon from '../../component/button/buttonIcon';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product } = props;

    const onProductDetail = (id) => {
        props.onProductDetail(id);
    }

    const onAddToCart = (product) => {
        props.onAddToCart(product);
    }

    


    return (
        <div className="product__item">
            <div className="product__content">

                <div className="product_images">
                    <Link to={`/product/${product.id}`} onClick={() => onProductDetail(product.id)}>
                        <Img Url={product.images} Width={'100%'} />
                    </Link>
                    <div className="products_overplay">
                        <div className="overplay__content">
                            <ButtonIcon Type={'submit'} Title={''} Icon={'fa-heart-o'} className="func__wishlist" />
                            <button type="submit" className="func__cart" onClick={() => onAddToCart(product)}>Add to cart</button>
                            <ButtonIcon Type={'submit'} Title={''} Icon={'fa-eye'} className="func__eye" />
                        </div>
                    </div>
                </div>

                <div className="product__info">
                    <p className="product-item__name">{product.name}</p>
                    <div className="product-item__rate">
                        <ul>
                            <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <p className="product-item__price">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;
