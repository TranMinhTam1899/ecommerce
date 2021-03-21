import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="logo_images">
                                <img src="../asset/images/logo.png" width="100%" alt="logo"/>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="info">
                                    <div className="info__main">
                                        <h4 className="footer_title">THÔNG TIN LIÊN HỆ</h4>
                                        <div className="info__content">
                                            <ul>
                                                <li>Address: <span>173 Đường 20, Phường 5, quận Gò Vấp</span></li>
                                                <li>Email: <span>tranminhtam1899@gmail.com</span></li>
                                                <li>Phone: <span>0354509013</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="res_email">
                                    <div className="res_email__main">
                                        <h4 className="footer_title">ĐĂNG KÍ</h4>
                                        <form className="frm_footer">
                                            <input className="form-control" type="text" placeholder="Đăng ký" />
                                            <Link to="#" className="btn btnSend" > Đăng ký</Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    </div>
                  </div>

            </footer >
            <div className="copy__right">
                <div className="container">
                    <span className="disign">© 2021 .Thiết kế bởi Trần Minh Tâm</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;