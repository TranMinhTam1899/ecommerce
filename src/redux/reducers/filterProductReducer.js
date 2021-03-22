
import * as actionType from '../constants/actionType';

let initState = {
    name: '',
    filterPrice: {
        min: 0,
        max: 1000
    },
    filterCata: []
}

const findIndex = (array, value) => {
    let result = -1;
    if (array && array.length > 0) {
        array.forEach((item, index) => {
            if (item=== value) {
                result = index;
            }
        })
    }
    return result;
}

const filterProduct = (state = initState, action) => {
    let index=-1;
    switch (action.type) {
       case actionType.FILTER_PRODUCT:
           state.name=action.filterName;
        return { ...state }
        case actionType.FILTER_PRICE_PRODUCT:
           state.filterPrice=action.value;
        return { ...state }
        case actionType.FILTER_CATA_PRODUCT:
            index=findIndex(state.filterCata, action.cata);
            if(index === -1){
                state.filterCata.push(action.cata);
            }else{
                const newArr = [...state.filterCata];
                newArr.splice(index, 1);
                state.filterCata=newArr;
            }
        return { ...state }
        default:
            return { ...state }
    }
}
export default filterProduct;