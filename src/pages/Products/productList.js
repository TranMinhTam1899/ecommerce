import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddToCart } from '../../redux/action/cartAction';
import { actFetchProduct, actProductDetail } from '../../redux/action/productAction';
import { actFilterPriceProduct, actFilterProduct } from '../../redux/action/filterProduct';
import Product from './product';
import SortProduct from './sortProduct';
import FilterProduct from './filterProduct';
import { actSordProduct } from '../../redux/action/sortProduct';

import 'react-input-range/lib/css/index.css';

const ProductList = (props) => {

    let { listProducts, sort, filterName, filterPrice } = props;
    const [numItem, setNumItem] = useState(8);
    const [view, setView] = useState(1);

    useEffect(() => {
        props.fetchAllProduct();
    }, []);

    const onProductDetail = (id) => {
        props.onGetProductDetail(id);
    }

    const onAddToCart = (product, quanty = 1) => {
        props.onAddToCart(product, quanty);
    }

    const onFilter = (filterName) => {
        props.onFilterProduct(filterName);
    }

    const onSort = (sort) => {
        props.onSortProduct(sort);
    }

    const onFilterPrice = (value) => {
        props.onFilterPriceProduct(value);
    }


    listProducts.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
    });

    listProducts = listProducts.filter((product) => {
        return product.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
    })

    listProducts = listProducts.filter((product) => {
        return product.pricePromo >= filterPrice.min && product.pricePromo <= filterPrice.max;
    })


    return (
        <div>
            <section className="solid_banner_area">
                <div className="container">
                    <div className="solid_banner_inner">
                        <h3>Product List</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/product">&nbsp;Product</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="categories_product_main p_80">
                <div className="container">
                    <div className="categories_main_inner">
                        <div className="row row_disable">
                            <div className="col-lg-3 float-md-right">
                                <div className="categories_sidebar">
                                    <FilterProduct
                                        onFilter={(filterName) => onFilter(filterName)}
                                        onFilterPrice={(value) => onFilterPrice(value)}
                                    />

                                </div>
                            </div>

                            <div className="col-lg-9 float-md-right">
                                <div className="showing_fillter">
                                    <div className="row m0">
                                        <div className="first_fillter">
                                            <h4>Showing 1 to {numItem} of {listProducts.length} total</h4>
                                        </div>
                                        <div className="secand_fillter">
                                            <h4>Show : </h4>
                                            <select className="selectpicker" onChange={(e) => setNumItem(e.target.value)} value={numItem}  >
                                                <option value={8} >8 item</option>
                                                <option value={6} >6 item</option>
                                                <option value={4} >4 item</option>
                                            </select>
                                        </div>
                                        <SortProduct onSort={(sort) => onSort(sort)} />
                                        <div className="four_fillter">
                                            <h4>View</h4>
                                            <Link to="#" className={view === 1 ? 'active' : ''} onClick={() => setView(1)} >
                                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                            </Link>
                                            <Link to="#" className={view === 0 ? 'active' : ''} onClick={() => setView(0)}>
                                                <i className="fa fa-th" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="categories_product_area">
                                    <div className="Filter_Resuld">
                                        <span className="span_Resuld">Có 0 kết quả được tìm thấy</span>
                                    </div>
                                    
                                    <div className={view === 1 ? 'list__product__grid' : 'list_product_grid_row'}>
                                        {

                                            listProducts.map((product, index) => {
                                                if (index < numItem) {
                                                    return (<Product
                                                        key={index} product={product}
                                                        onProductDetail={(id) => onProductDetail(id)}
                                                        onAddToCart={(product) => onAddToCart(product)}
                                                    />)
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProduct: () => {
            dispatch(actFetchProduct());
        },
        onGetProductDetail: (id) => {
            dispatch(actProductDetail(id));
        },
        onAddToCart: (product, quanty) => {
            dispatch(actAddToCart(product, quanty));
        },
        onFilterProduct: (filterName) => {
            dispatch(actFilterProduct(filterName));
        },
        onSortProduct: (sort) => {
            dispatch(actSordProduct(sort));
        },
        onFilterPriceProduct: (value) => {
            dispatch(actFilterPriceProduct(value));
        }

    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.products.productList,
        sort: state.sortProduct,
        filterName: state.filterProduct.name,
        filterPrice: state.filterProduct.filterPrice
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);