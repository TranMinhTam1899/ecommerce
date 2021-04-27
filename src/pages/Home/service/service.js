import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const Service = () => {
    return (
        <section className="service pb-5">
            <Container>
                <div className="service_content p-5">
                    <Row>
                        <Col md="3" sm="6" xs="12">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-1.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Trên toàn quốc</span>
                                </h4>
                            </div>
                        </Col>
                        <Col md="3" sm="6" xs="12">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-2.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Hổ trợ 24/7</span>
                                </h4>
                            </div>
                        </Col>
                        <Col md="3" sm="6" xs="12">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-3.png" alt="" />
                                    <span className="service_text ml-2 fs-20">An toàn</span>
                                </h4>
                            </div>
                        </Col>
                        <Col md="3" sm="6" xs="12">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-4.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Miển phí giao hàng</span>
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Service;
