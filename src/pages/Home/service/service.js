import React from 'react'

const Service = () => {
    return (
        <section className="service pb-5">
            <div className="container">
                <div className="service_content p-5">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-xs-6">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-1.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Worldwide Service</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-6">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-2.png" alt="" />
                                    <span className="service_text ml-2 fs-20">247 Help Center</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-6">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-3.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Safe Payment</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-6">
                            <div className="service_item">
                                <h4>
                                    <img src="../asset/images/service/world-icon-4.png" alt="" />
                                    <span className="service_text ml-2 fs-20">Quick Delivary</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;
