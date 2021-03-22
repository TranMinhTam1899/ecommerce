import React, { useState } from "react";
import { connect } from "react-redux";
import { actCreateAcount } from "../../redux/action/authAction";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";

const Rigister = (props) => {
    const history = useHistory();

    const [formSeccess, setFormSeccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isRegisterFaild, setIsRegisterFaild] = useState(false);
    const [info, setInfo] = useState({
        username: "",
        password: "",
        name: "",
        fullName: "",
        sex: "Nam",
        address: "",
        phone: "",
        email: "",
    });
    const [error, setError] = useState({
        username: "",
        password: "",
        name: "",
        fullName: "",
        address: "",
        phone: "",
        email: "",
    });

    const submitHandle = (e) => {
        e.preventDefault();
        setLoading(true);
        const user = {
            username: info.username,
            password: info.password,
            name: info.name,
            fullName: info.fullName,
            sex: info.sex,
            address: info.address,
            phone: info.phone,
            email: info.email,
            avatar: "",
            role: 1,
            status: 1,
        };
        if (user.username !== "" && user.password !== "" && user.name !== "" && user.fullName !== "" && user.address !== "" && user.phone !== "" && user.email !== "") {
            setFormSeccess(true);
        } else {
            setIsRegisterFaild(true);
            setLoading(false);
        }
        
        if (formSeccess === true) {
            setTimeout(() => {
                setLoading(false);
                props.onCreateAcount(user);
                history.push('/login');
            }, 1000);
        }

    };

    const onChangeRegister = (e) => {
        let { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const onHandleErrors = (e) => {
        let { name, value } = e.target;
        let message = value === "" ? <Alert variant="danger" id="error">{name} vui lòng không để trống</Alert> : " ";

        switch (name) {
            case "username":
                if (value !== "" && value.length < 6) {
                    message = <Alert variant="danger" id="error">{name} lớn từ 6 ký tự trở lên</Alert>;
                    setFormSeccess(false);
                }else{
                    setFormSeccess(true);
                }
                break;
            case "password":
                if (value !== "" && value.length < 8) {
                    message = <Alert variant="danger" id="error">{name} lớn từ 8 ký tự trở lên</Alert>;
                }
                break;
            case "name":
                break;
            case "fullFame":
                break;
            case "email":
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    message = <Alert variant="danger" id="error">{name} của bạn chưa hợp lệ</Alert>;
                }
                break;
            case "phone":
                break;
            case "address":
                break;
            default: break;
        }

        setError({ ...error, [name]: message });


    }

    return (
        <section className="login_area p_100">
            <div className="container">
                <div className="login_inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login_title">
                                <h2>create account</h2>
                            </div>
                            <form className="login_form row" onSubmit={submitHandle}>
                                {

                                    (isRegisterFaild === true) ? <p className="text-error text-center " style={{ width: '100%' }}>Vui lòng nhập thông tin vào from để đăng ký tài khoản</p> : ""

                                }
                                <div className="col-lg-6 form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.username}
                                    />
                                    {error.username !== "" ? <span >{error.username}</span> : ""}
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.password}
                                    />
                                    {error.password !== "" ? <span>{error.password}</span> : ""}
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.name}
                                    />
                                    {error.name !== "" ? <span >{error.name}</span> : ""}
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Full name"
                                        name="fullName"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.fullName}
                                    />
                                    {error.fullName !== "" ? <span >{error.fullName}</span> : ""}
                                </div>
                                <div className="col-lg-12 form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.email}
                                    />
                                    {error.email !== "" ? <span>{error.email}</span> : ""}
                                </div>
                                <div className="col-lg-6 form-group">
                                    <select
                                        className="form-control"
                                        onChange={onChangeRegister}
                                        onKeyUp={onHandleErrors}
                                        name="sex"
                                        value={info.sex}
                                    >
                                        <option value={"Nam"}>Nam</option>
                                        <option value={"Nữ"}>Nữ</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.phone}
                                    />
                                    {error.phone !== "" ? <span >{error.phone}</span> : ""}
                                </div>

                                <div className="col-lg-12 form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        onChange={onChangeRegister}
                                        onBlur={onHandleErrors}
                                        onKeyUp={onHandleErrors}
                                        value={info.address}
                                    />
                                    {error.address !== "" ? <span >{error.address}</span> : ""}
                                </div>
                                <div className="col-lg-12 form-group">
                                    <button
                                        type="submit"
                                        value="submit"
                                        className="btn subs_btn form-control"
                                    >
                                        {loading ? <span className="btn_loading"><i className="fa fa-spinner" aria-hidden="true" ></i> Loading...</span> : <span>Register</span>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCreateAcount: (user) => {
            dispatch(actCreateAcount(user));
        },
    };
};

export default connect(null, mapDispatchToProps)(Rigister);
