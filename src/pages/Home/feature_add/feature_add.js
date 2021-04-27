import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const FeatureAdd = () => {
    return (
        <section className="feature_add mb-5 pt-3">
            <Container>
                <div className="feature_add_content">
                    <Row>
                        <Col  sm="12" md="5" className=" pb-3">
                            <div className="feature_big_item">
                                <div className="feature_img">
                                    <img src="../asset/images/featureAdd/f-add-1.jpg" className="w-100" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col  sm="12" md="4" className=" pb-3">
                            <div className="feature_big_item">
                                <div className="feature_img">
                                    <img src="../asset/images/featureAdd/f-add-2.jpg" className="w-100" alt="" />
                                 </div>                         
                            </div>
                        </Col>
                        <Col  sm="12" md="3" className=" pb-3">
                            <div className="feature_big_item">
                                <div className="feature_img">
                                    <img src="../asset/images/featureAdd/f-add-3.jpg" className="w-100" alt="" />
                                 </div>                         
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    )
}

export default FeatureAdd;
