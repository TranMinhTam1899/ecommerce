import React, { useState } from 'react'
import Img from '../../component/img/img';

const CartItem = (props) => {

    const { cart } = props;
    const [quanty, setQuanty] = useState(cart.quanty);

    const showSubTotal = (price, quanty) => {
        return price * quanty;
    }

    const onDeleteInCart = (id) => {
        props.onDeleteInCart(id);
    }

    const onUpdateQuanty = (id, quanty) => {
        if (quanty > 0) {
            setQuanty(quanty);
            props.onUpdateInCart(id, quanty);
        }
    }



    return (
        <tr className="items">
            <th scope="row">
                <span className="remove" onClick={() => onDeleteInCart(cart.product.id)}>X</span>
            </th>
            <td>
                <div className="media">
                    <Img Url={cart.product.images} Width={'70px'} />
                </div>
            </td>
            <td>
                <div className="media-name">
                    <h4>{cart.product.name}</h4>
                </div>
            </td>

            <td><p className="red">${cart.product.price}</p></td>
            <td>
                <div className="quantity">
                    <div className="custom">
                        <button type="button" className="btnPlus" onClick={() => onUpdateQuanty(cart.product.id, cart.quanty - 1)}>-</button>
                        <input type="text" name="qty" id="sst2" className="input-text qty" value={quanty} readOnly />
                        <button type="button" className="btnMins" onClick={() => onUpdateQuanty(cart.product.id, cart.quanty + 1)}>+</button>
                    </div>
                </div>
            </td>
            <td><p>${showSubTotal(cart.product.price, quanty)}</p></td>
        </tr>
    )
}

export default CartItem;