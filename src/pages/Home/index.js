import React from 'react';
import FeatureProduct from './featureProducts/featureProduct';
import Carousel from './carousel/carousel';
import Blog from './blog/blog';
import FeatureBig from './feature_big/feature_big';
import Service from './service/service';
import FeatureAdd from './feature_add/feature_add';
import NewProduct from './newProduct/newProduct';

const Home = () => {
    return (
        <div>
            <Carousel />
            <FeatureAdd />
            <NewProduct />
            <FeatureProduct />
            <FeatureBig />
            <Blog />
            <Service />
        </div>
    ) 
}

export default Home;