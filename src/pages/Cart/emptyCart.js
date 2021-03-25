import React from 'react'
import { Link } from 'react-router-dom';
import Img from '../../component/img/img';

const EmptyCart = () => {
    return (
        <div>
            <section className="solid_banner_area">
                <div className="container">
                    <div className="solid_banner_inner">
                        <h3>empty cart</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/empty-cart">&nbsp;Empty cart</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="emty_cart_area p_100">
                <div className="container">
                    <Img Url={'../asset/images/logo.png'} width={'100%'} />
                    <div className="emty_cart_inner">
                        <i className="icon-handbag icons"></i>
                        <h3>Your Cart is Empty</h3>
                        <h4>back to <Link to="/">shopping</Link></h4>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default EmptyCart;
