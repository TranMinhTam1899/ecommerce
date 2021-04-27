import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ButtonDropdown, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import { actLogout } from '../../redux/action/authAction';
import Img from '../img/img';
import Navigation from '../menu/navigation';

const Header = (props) => {
    let { cart, user } = props;
    const userActive = JSON.parse(localStorage.getItem('user'));
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (userActive) {
            setIsLogin(true);
        }
    }, [userActive])


    const LogoutUser = () => {
        props.onLogoutSuccess();
        setIsLogin(false);
        localStorage.setItem('cart', JSON.stringify([]));
        history.push('/');
    }

    const showLogin = () => {
        if (isLogin) {
            return (
                <li className="user">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="btnTogoleLogin">
                            <Link to="#" id="btn__login" className="avatar">
                                <img src={user.avatar} width="100%" alt={user.avatar} />
                            </Link>
                        </DropdownToggle>
                        <DropdownMenu id="userDropDownContent">
                            <DropdownItem className="userDropDownItem">
                                <Link to="/profile">
                                    Profile
                                            </Link>
                            </DropdownItem>
                            <DropdownItem className="userDropDownItem">
                                <Link to="#" onClick={LogoutUser}>
                                    Đăng xuất
                                            </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                </li>)
        } else {
            return (
                <li className="user">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="btnTogoleLogin">
                            <Link to="#" id="btn__login">
                                <i className="fa fa-user-circle-o" aria-hidden="true" />
                            </Link>
                        </DropdownToggle>
                        <DropdownMenu id="userDropDownContent">
                            <DropdownItem className="userDropDownItem">
                                <Link to="/login">
                                    Đăng nhập
                                                </Link>
                            </DropdownItem>
                            <DropdownItem className="userDropDownItem">
                                <Link to="/rigister">
                                    Đăng ký
                                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                </li>)
        }
    }


    return (
        <header className="header">
            <Container>
                <div className="header__content">
                    <Row>
                        <Col md="3" xs="12">
                            <div className="header__logo text-center">
                                <Link to="/">
                                    <Img Url={'../asset/images/logo.png'} />
                                </Link>
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <Navigation />
                        </Col>
                        <Col md="3" xs="12">
                            <div className="top__right__header">
                                <ul className="top_right">

                                    {showLogin()}

                                    <li className="cart">
                                        <Link to="/cart" id="btn__cart">
                                            <i className="fa fa-opencart" aria-hidden="true" />
                                        </Link>
                                        <span className="cart__number__bg">
                                            <span className="cart__number">{cart.cart.length}</span>
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutSuccess: () => {
            dispatch(actLogout());
        },

    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.authentication.user.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);