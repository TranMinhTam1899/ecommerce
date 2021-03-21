import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';

const TeamplateClient = (props) => {
    const HomeLayout = props => {
        return (
            <Fragment>
                {props.children}
            </Fragment>
        )
    }
    return (
        <div>
            <Header />
            <div style={{ paddingTop: 70 }}>
                <Route {...props}
                    render={propsComponent =>
                        <HomeLayout>
                            <Component {...propsComponent} />
                        </HomeLayout>
                    }
                />
            </div>
            <Footer />
        </div>
    )
}

export default TeamplateClient;
