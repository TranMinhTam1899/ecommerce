import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Img from '../../component/img/img';

const EmptyCart = () => {
    return (
        <div>
            <section className="solid_banner_area">
                <Container>
                    <div className="solid_banner_inner">
                        <h3>empty cart</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/empty-cart">&nbsp;Empty cart</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section className="emty_cart_area p_100">
                <Container>
                    <Img Url={'../asset/images/logo.png'} width={'100%'} />
                    <div className="emty_cart_inner">
                        <i className="icon-handbag icons"></i>
                        <h3>Your Cart is Empty</h3>
                        <h4>back to <Link to="/">shopping</Link></h4>
                    </div>
                </Container>
            </section>


        </div>
    )
}

export default EmptyCart;
