import React from 'react';
import FeatureProduct from './featureProducts/featureProduct';
import Carousel from './carousel/carousel';
import Blog from './blog/blog';

const Home = () => {
    return (
        <div>
            <Carousel />
            <FeatureProduct />
            <Blog />
        </div>
    )
}

export default Home;