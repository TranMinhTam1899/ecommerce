
import * as actionType from '../constants/actionType';

let initState = {
    name: '',
    filterPrice: {
        min: 0,
        max: 1000
    }
}

const filterProduct = (state = initState, action) => {
    switch (action.type) {
       case actionType.FILTER_PRODUCT:
           state.name=action.filterName;
        return { ...state }
        case actionType.FILTER_PRICE_PRODUCT:
           state.filterPrice=action.value;
        return { ...state }
        default:
            return { ...state }
    }
}
export default filterProduct;