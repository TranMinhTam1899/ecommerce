
import * as actionType from '../constants/actionType';

let initState = {
    by: '',
    value: 1
}

const sortProduct = (state = initState, action) => {
    switch (action.type) {
       case actionType.SORT_PRODUCT:
           state.by=action.sort.by;
           state.value=action.sort.value;
        return { ...state }
        default:
            return { ...state }
    }
}
export default sortProduct;