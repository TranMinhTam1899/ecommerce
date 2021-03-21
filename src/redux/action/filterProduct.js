import * as actionType from '../constants/actionType';

export const actFilterProduct=(filterName)=>{
    return {
        type: actionType.FILTER_PRODUCT,
        filterName
    }
}

export const actFilterPriceProduct=(value)=>{
    return {
        type: actionType.FILTER_PRICE_PRODUCT,
        value
    }
}