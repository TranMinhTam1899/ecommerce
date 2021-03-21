import * as actionType from '../constants/actionType';
import * as Function from '../../component/function/function';
import alertify from 'alertifyjs';

let user = JSON.parse(localStorage.getItem('user'));
let initState = {
    listUser: [],
    user: user ? user : {}
}



const authentication = (state = initState, action) => {
    let index = -1;
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            state.listUser = action.users;
            return { ...state }
        case actionType.LOGIN_SUCCESS:
            index = Function.findIndex(state.listUser, action.user);
            if (index !== -1) {
                state.user = {
                    loggedIn: true,
                    user: state.listUser[index]
                }; 
            }
            localStorage.setItem('user', JSON.stringify(state.user));
            return { ...state }
        case actionType.LOGOUT_SUCCESS:
            state.user = {
                loggedIn: false,
                user: action.user
            };
            localStorage.removeItem('user');
            
            return { ...state }
        case actionType.REGISTER_SUCCESS:
            alertify.success('Đăng ký tài khoản thành công');
            const newListUser = [...state.listUser];
            newListUser.push(action.user);
            return {
                ...state,
                listUser: newListUser
            };
        case actionType.UPDATE_USER_SUCCESS:
            state.user = {
                loggedIn: true,
                user: action.body
            };
            localStorage.setItem('user', JSON.stringify(state.user));
            return { ...state}
        default:
            return { ...state }
    }
}

export default authentication;