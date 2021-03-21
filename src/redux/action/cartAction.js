import * as actionType from '../constants/actionType';


export const actAddToCart =(product, quanty)=>{
    return {
        type: actionType.ADD_TO_CART,
        product,
        quanty
    }
}

export const actDeleteInCart =(id)=>{
    return {
        type: actionType.DELETE_iTEM_IN_CART,
        id
    }
}

export const OnUpdateProductInCart = (id, quanty) => {
    return{
        type: actionType.UPDATE_IN_CART,
        id,
        quanty
    }
}

