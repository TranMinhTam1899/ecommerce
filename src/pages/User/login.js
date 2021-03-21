import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actFetchUser, actLoginSuccess } from '../../redux/action/authAction';
import * as Function from '../../component/function/function';

const Login = (props) => {
    const { users } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isNullUsername, setIsNullUsername] = useState(false);
    const [isNullPassword, setIsNullPassword] = useState(false);
    const [isloginFaild, setIsloginFaild] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        props.fetchAllUser();
    },[]);

    const submitHandle = (e) => {
        let index = -1;
        const user={
            username : username, 
            password : password
        }
        e.preventDefault();
        if ((username !== "") && (password !== "")) {
            index = Function.findIndex(users, user);
            if (index !== -1) {
                setLoading(true);
                setTimeout(()=>{
                    props.onLoginSuccess(username, password);
                    history.push('/');
                    setLoading(false);
                },3000)
                
            } else {
                setIsloginFaild(true);
            }

        } else {
            setIsNullUsername((username === "") ? true : false);
            if (isNullUsername === false) {
                setIsNullPassword((password === "") ? true : false);
            }

        }

    }

    return (
        <section className="login_area " style={{ padding: '25px 0' }} >
            <div className="container">
                <div className="login_inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login_title">
                                <h2>log in</h2>
                            </div>
                            <form className="login_form row" onSubmit={submitHandle}>
                                {

                                    (isloginFaild===true) ? <p className="text-error text-center " style={{ width: '100%' }}>Tài khoản hoặc mật khẩu không đúng vui lòng nhập lại</p> : ""

                                }
                                <div className="col-lg-12 form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="User name"
                                        name="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                    {
                                        ((username === "") && (isNullUsername === true)) ? <span className="text-error">Vui lòng nhập tài khoản</span> : ""
                                    }

                                </div>
                                <div className="col-lg-12 form-group">
                                    <input className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    {
                                        ((password === "") && (isNullPassword === true)) ? <span className="text-error">Vui lòng nhập mật khẩu</span> : ""
                                    }
                                </div>
                                <div className="col-lg-12 form-group">
                                    <button type="submit" value="submit" className="btn update_btn form-control">
                                    {loading ? <span className="btn_loading"><i class="fa fa-spinner" aria-hidden="true" ></i> Loading...</span> : <span>Login</span>}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUser: () => {
            dispatch(actFetchUser());
        },
        onLoginSuccess: (username, password) => {
            dispatch(actLoginSuccess(username, password));
        },

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.authentication.listUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);