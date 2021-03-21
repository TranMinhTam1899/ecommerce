import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <div className="Navigation__content">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navigation;