import * as actionType from '../constants/actionType';
import alertify from 'alertifyjs';

let data = JSON.parse(localStorage.getItem('cart'));
let initState = {
    cart: data ? data : []
}

const findIndex = (array, id) => {
    let result = -1;
    if (array && array.length > 0) {
        array.forEach((item, index) => {
            if (item.product.id === id) {
                result = index;
            }
        })
    }
    return result;
}

const cart = (state = initState, action) => {
    let index = -1;
    const { product, quanty } = action;
    switch (action.type) {
        case actionType.ADD_TO_CART:
            index = findIndex(state.cart, product.id);
            if (index !== -1) {
                state.cart[index].quanty += quanty;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } else {
                state.cart.push({ product, quanty });
                localStorage.setItem('cart', JSON.stringify(state.cart));
                alertify.success('Thêm sản phẩm thàng công');
            }
            return { ...state };
        case actionType.DELETE_iTEM_IN_CART:
            index = findIndex(state.cart, action.id);
            const newCart = [...state.cart];
            if (index !== -1) {
                newCart.splice(index, 1);
                state.cart=newCart;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return {...state}
        case actionType.UPDATE_IN_CART:
            index = findIndex(state.cart, action.id);
            if (index !== -1) {
                state.cart[index].quanty = quanty;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return { ...state }
        default:
            return { ...state }
    }


}
export default cart;