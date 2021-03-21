import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actCreateAcount} from '../../redux/action/authAction';
import { useHistory } from 'react-router-dom';

const Rigister = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [sex, setSex] = useState("Nam");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const history=useHistory();


    const submitHandle = (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
            name,
            fullName,
            sex,
            address,
            phone,
            email,
            avatar: "",
            role: 1,
            status: 1
        };
        props.onCreateAcount(user);
        history.push('/login');

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
                            <form className="login_form row" onSubmit={submitHandle} >
                                <div className="col-lg-6 form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Full name"
                                        name="fullName"
                                        onChange={(e) => setFullName(e.target.value)}
                                        value={fullName}
                                    />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <input className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <select className="form-control" onChange={(e) => setSex(e.target.value)} value={sex} >
                                        <option value={'Nam'}>Nam</option>
                                        <option value={'Nữ'}>Nữ</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input className="form-control"
                                        type="phone"
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                    />
                                </div>

                                <div className="col-lg-12 form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        onChange={(e) => setAddress(e.target.value)}
                                        value={address}
                                    />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <button type="submit" value="submit" className="btn subs_btn form-control">register now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCreateAcount: (user) => {
            dispatch(actCreateAcount(user));
        }

    }
}

export default connect(null, mapDispatchToProps)(Rigister);