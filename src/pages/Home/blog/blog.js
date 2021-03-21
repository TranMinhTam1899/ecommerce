import React from 'react'

const Blog=()=> {
    return (
        <section className="from_blog_area">
            <div className="container">
                <div className="from_blog_inner">
                    <div className="c_main_title">
                        <h2>From The Blog</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-1.jpg" alt="blog 1" />
                                <div className="f_blog_text">
                                    <h5>fashion</h5>
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <h6>21.09.2017</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-2.jpg" alt="blog 1" />
                                <div className="f_blog_text">
                                    <h5>fashion</h5>
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <h6>21.09.2017</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="from_blog_item">
                                <img className="img-fluid" src="../asset/images/blog/f-blog-3.jpg" alt="blog 1" />
                                <div className="f_blog_text">
                                    <h5>fashion</h5>
                                    <p>Neque porro quisquam est qui dolorem ipsum</p>
                                    <h6>21.09.2017</h6>
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