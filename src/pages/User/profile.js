import React, { useState } from 'react'
import { connect } from 'react-redux';
import ModalUpdateProfile from '../../component/modal/modalUpdateProfile';

const Profile = (props) => {
    const { user } = props;
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const hideModal = () => setModal(false);

    const onUpload = () => {
        alert("Đang phát triển ......");
    }

    return (
        <section className="profile">
            <div className="container">
                <div className="profile__content">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="profile__images">
                                <div className="profile_avatar">
                                    <img src={user.avatar} className="rev-slidebg" width="100%" alt={user.avatar} />
                                </div>
                                <div className="profile_button">
                                    <button className="btn_upload" onClick={onUpload}>
                                        <i className="fa fa-upload" aria-hidden="true" style={{ paddingRight: 20 }}></i>
                                Tải ảnh lên
                            </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="profile_info">
                                <div className="profile__info__content">
                                    <div className="row">
                                        <h5 className="col-lg-12">{user.fullName}</h5>
                                    </div>
                                    <div className="row">
                                        <span className="col-lg-2">Email:</span>
                                        <span className="col-lg-10">{user.email}</span>
                                    </div>
                                    <div className="row">
                                        <span className="col-lg-2">Sex:</span>
                                        <span className="col-lg-10">{user.sex}</span>
                                    </div>
                                    <div className="row">
                                        <span className="col-lg-2">Address:</span>
                                        <span className="col-lg-10">{user.address}</span>
                                    </div>
                                    <div className="row">
                                        <span className="col-lg-2">Phone:</span>
                                        <span className="col-lg-10">{user.phone}</span>
                                    </div>
                                    <div className="row">
                                        <span className="col-lg-6 btn_func">
                                            <button className="btn_update"
                                                onClick={openModal}
                                            >Update User</button>
                                        </span>
                                        <span className="col-lg-6"></span>

                                        <ModalUpdateProfile user={user} modal={modal} hideModal={hideModal} />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.authentication.user.user
    }
}

export default connect(mapStateToProps, null)(Profile);
