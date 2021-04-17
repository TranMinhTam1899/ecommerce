import React from 'react'
import { Link } from 'react-router-dom';

const Blog=()=> {
    return (
        <section className="from_blog_area pt-5">
            <div className="container">
                <div className="from_blog_inner">
                    <div className="c_main_title pt-0">
                        <h2>From The Blog</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-1.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn_fast">fashion</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-2.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn_fast">fashion</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-3.jpg" alt="blog 1" />
                                <div className="f_blog_text text-center">
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <Link to="#" className="btn_fast">fashion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Blog;