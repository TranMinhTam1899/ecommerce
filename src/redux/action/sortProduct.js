import * as actionType from '../constants/actionType';

export const actSordProduct=(sort)=>{
    return {
        type: actionType.SORT_PRODUCT,
        sort
    }
}