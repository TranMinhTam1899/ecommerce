import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteInCart, OnUpdateProductInCart } from '../../redux/action/cartAction';
import CartItem from './cartItem';
import EmptyCart from './emptyCart';

const Cart = (props) => {

    const { listCart } = props;
    
    const onDeleteInCart = (id) => {
        props.onDeleteInCart(id);
    }

    const onUpdateInCart = (id, quanty) => {
        props.onUpdateInCart(id, quanty);
    }

    const onCheckPay=()=>{
        if(localStorage.getItem('user')){
            console.log("đã đăng nhập");
        }else{
            alert('Vui lòng đăng nhập để thanh toán')
        }
    }


    const totalAmount = (cart) => {

        let total = 0;
        if (cart && cart.length) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quanty;
                
            }
        }
        return total;
    }


    if (listCart.length < 1) {
        return <EmptyCart />
    } else {
        return (
            <div>

                <section className="solid_banner_area">
                    <div className="container">
                        <div className="solid_banner_inner">
                            <h3>Shopping Cart</h3>
                            <ul>
                                <li><Link to="/">Home /</Link></li>
                                <li><Link to="/cart">Shopping cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="shopping_cart_area p_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cart_items">
                                    <h3>Your Cart Items</h3>
                                    <div className="table-responsive-md">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <th>
                                                        <span>Images</span>
                                                    </th>
                                                    <th>
                                                        <span>Name</span>
                                                    </th>
                                                    <th>
                                                        <span>Price</span>
                                                    </th>
                                                    <th>
                                                        <span>Quanty</span>
                                                    </th>
                                                    <th>
                                                        <span>Sumary</span>
                                                    </th>
                                                </tr>
                                                {
                                                    listCart.map((cart, index) => {
                                                        return <CartItem
                                                            cart={cart} key={index}
                                                            onDeleteInCart={(id) => onDeleteInCart(id)}
                                                            onUpdateInCart={(id, quanty) => onUpdateInCart(id, quanty)}
                                                        />
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
           
                           
                            </div>
                            <div className="col-lg-4">
                                <div className="cart_totals_area">
                                    <h4>Cart Totals</h4>
                                    <div className="cart_t_list">
                                        <div className="media">
                                            <div className="d-flex">
                                                <h5>Subtotal</h5>
                                            </div>
                                            <div className="media-body">
                                                <h6>$0.0</h6>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="d-flex">
                                                <h5>Shipping</h5>
                                            </div>
                                            <div className="media-body">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total_amount row m0 row_disable">
                                        <div className="float-left">
                                            Total
                </div>
                                        <div className="float-right">
                                            ${totalAmount(listCart)}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"className="btn subs_btn form-control" onClick={()=>onCheckPay()}>Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteInCart: (id) => {
            dispatch(actDeleteInCart(id));
        },
        onUpdateInCart: (id, quanty) => {
            dispatch(OnUpdateProductInCart(id, quanty));
        }

    }
}
const mapStateToProps = (state) => {
    return {
        listCart: state.cart.cart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

