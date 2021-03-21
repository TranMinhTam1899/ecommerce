import AxiosAPI from '../../api/axiosAPI';
import * as actionType from '../constants/actionType';

export const actFetchUser = () => {
    return dispatch => {
        AxiosAPI('User', 'GET', null).then((res) => {
            dispatch({
                type: actionType.LOGIN_REQUEST,
                users: res.data
            })
        })
    }
}

export const actLoginSuccess = (username, password) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        user: {
            username,
            password
        }
    }
}

export const actLogout = () => {
    return {
        type: actionType.LOGOUT_SUCCESS,
        user: null
    }
}

export const actCreateAcount = (user) => {
    return dispatch => {
        AxiosAPI('User', "POST", user).then((res)=>{
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                user: res.data
            })
        })
    }
}

export const actUpdateUser = (id, body) => {
    return dispatch => {
        AxiosAPI(`User/${id}`, 'PUT', body).then((res) => {
            dispatch({
                type: actionType.UPDATE_USER_SUCCESS,
                body: res.data
            });
        })
    }
}


