import * as actionType from '../constants/actionType';
import AxiosAPI from '../../api/axiosAPI';

export const actFetchProduct = () => {
    return dispatch => {
        try{
            AxiosAPI('Product', 'GET', null).then(res => {
                dispatch({
                    type: actionType.GET_DATA_PRODUCT,
                    products: res.data
                })
            })
        }catch(error){
            console.log(error);
        }
        
    }
};

export const actProductDetail = (id) => {
    return dispatch => {
        AxiosAPI(`Product/${id}`, 'GET', null).then((res) => {
            dispatch({
                type: actionType.GET_PRODUCT_DETAIL,
                product: res.data
            })
        })
    }
}





