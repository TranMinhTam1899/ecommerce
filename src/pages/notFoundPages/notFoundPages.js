import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Img from '../../component/img/img'

const NotFoundPages=()=> {
    return (
        <div>
           <section className="solid_banner_area">
                <Container>
                    <div className="solid_banner_inner">
                        <h3>Not Found Pages</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/abc"> 404</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section class="emty_cart_area p_100">
                <Container>
                    <Img Url={'../asset/images/logo.png'} width={'100%'} />
                    <div class="emty_cart_inner">
                        <i class="icon-handbag icons"></i>
                        <h3>404</h3>
                        <h4>back to <Link to="/">Home</Link></h4>
                    </div>
                </Container>
            </section>
            
        </div>
    )
}

export default NotFoundPages