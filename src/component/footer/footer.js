import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <section>
        <footer className="footer">
            <Container>
                <Row>
                    <Col md="3" sm="12" xs="12">
                        <div className="logo_images">
                            <img src="../asset/images/logo.png" width="100%" alt="logo" />
                        </div>
                    </Col>
                    <Col md="9" sm="12" xs="12">
                        <Row>
                            <Col md="6" sm="12" xs="12">
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
                            </Col>
                            <Col md="6" sm="12" xs="12">
                                <div className="res_email">
                                    <div className="res_email__main">
                                        <h4 className="footer_title">ĐĂNG KÍ</h4>
                                        <form className="frm_footer">
                                            <input className="form-control" type="text" placeholder="Đăng ký" />
                                            <Link to="#" className="btn btnSend" > Đăng ký</Link>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>

        </footer >
        <div className="copy__right">
            <Container>
                <span className="disign">© 2021 .Thiết kế bởi Trần Minh Tâm</span>
            </Container>
        </div>
    </section>
      )
}

export default Footer;