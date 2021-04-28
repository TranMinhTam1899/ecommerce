import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const BlogBanner=()=> {
    return (
        <section className="blog__banner mt-5 py-5 bg-info">
            <Container>
                <div className="blog__banner__main">
                    <Row>
                        <Col md="4">
                            <div className="blog__banner__images">
                                <Link to="#">
                                    <img src="../asset/images/blog/f-blog-5.jpg" alt="f-blog-4.jpg" className="w-100"/>
                                </Link>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className="blog__banner_content">
                                <h2 className="blog__banner__title">123</h2>
                                <p className="blog__banner__text">abc</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default BlogBanner;
