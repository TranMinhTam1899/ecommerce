import { combineReducers } from 'redux';
import products from './reducers/productReducer';
import cart from './reducers/cartReducer';
import authentication from './reducers/authReducer';
import sortProduct from './reducers/sortProductReducer';
import filterProduct from './reducers/filterProductReducer';

const rootReducers = combineReducers(
    {
        products,
        cart,
        authentication,
        sortProduct,
        filterProduct
    }
)
export default rootReducers;
