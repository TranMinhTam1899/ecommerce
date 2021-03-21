import React from 'react'
import { Link } from 'react-router-dom';

const Contact=()=> {
    return (
        <div>
            <section className="solid_banner_area">
                <div className="container">
                    <div className="solid_banner_inner">
                        <h3>Contact</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/contact">&nbsp;Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;