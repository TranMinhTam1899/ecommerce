import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { actUpdateUser } from '../../redux/action/authAction';

const ModalUpdateProfile = (props) => {
    const { user, modal } = props;
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState(user.fullName);
    const [sex, setSex] = useState(user.sex);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);

    const submitHandleProfile = (e) => {
        e.preventDefault();
        const customUser = { fullName, sex, address, phone, email };
        props.onUpdateUser(user.id, customUser);
    }

    const onloading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            props.hideModal(false);
        }, 1000);
    }

    const hideModal = () => {
        props.hideModal(false);
    }

    return (


        <Modal isOpen={modal} >
            <ModalHeader>
                <h5 className="modal-title" id="exampleModalCenterTitle">Update Profile</h5>
                <button type="button" className="close btnclose__frm">
                    <span aria-hidden="true" onClick={hideModal}>×</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <form method="Post" onSubmit={submitHandleProfile}>
                    <div className="col-lg-12 form-group">
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
                    <div className="col-lg-12 form-group">
                        <select className="form-control" onChange={(e) => setSex(e.target.value)} value={sex} >
                            <option value={'Nam'}>Nam</option>
                            <option value={'Nữ'}>Nữ</option>
                        </select>
                    </div>
                    <div className="col-lg-12 form-group">
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

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary"
                            id="btn_Update_profile"
                            onClick={onloading}
                        >
                            {loading ? <span className="btn_loading"><i class="fa fa-spinner" aria-hidden="true" ></i> Loading...</span> : <span>Update</span>}


                        </button>
                    </div>
                </form>
            </ModalBody>

        </Modal>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUser: (id, body) => {
            dispatch(actUpdateUser(id, body));
        }

    }
}


export default connect(null, mapDispatchToProps)(ModalUpdateProfile);
