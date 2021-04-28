import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Blog=()=> {
    return (
        <section className="from_blog_area pt-5">
            <Container>
                <div className="from_blog_inner">
                    <div className="c_main_title pt-0">
                        <h2>From The Blog</h2>
                    </div>
                    <Row>
                        <Col md="4" sm="6" xs="12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-1.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn">fashion</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md="4" sm="6" xs="12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-2.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn">fashion</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md="4" sm="6" xs="12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-3.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn">fashion</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

    )
}
export default Blog;