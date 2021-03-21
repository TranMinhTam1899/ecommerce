
import * as actionType from '../constants/actionType';

let product =JSON.parse(localStorage.getItem('product'));
let initState = {
    productList: [],
    product: product ? product : []
}

const products = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_DATA_PRODUCT:
            state.productList=action.products;
            return {...state};
        case actionType.GET_PRODUCT_DETAIL:
            state.product=action.product
            localStorage.setItem('product', JSON.stringify(state.product));
            return {...state};
        default:
            return { ...state }
    }
}
export default products;