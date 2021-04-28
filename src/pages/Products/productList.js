import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddToCart } from '../../redux/action/cartAction';
import { actFetchProduct, actProductDetail } from '../../redux/action/productAction';
import { actFilterCataProduct, actFilterPriceProduct, actFilterProduct } from '../../redux/action/filterProduct';
import Product from './product';
import SortProduct from './sortProduct';
import FilterProduct from './filterProduct';
import { actSordProduct } from '../../redux/action/sortProduct';
import 'react-input-range/lib/css/index.css';
import { Col, Container, Row } from 'reactstrap';

const ProductList = (props) => {

    let { listProducts, sort, filterName, filterPrice, filterCata } = props;
    const [view, setView] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(10);
    const [disabled, setDisabled] = useState(true);


    const chosePage = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const select = (event) => {
        setNewsPerPage(event.target.value);
    }



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

    const onFilterCata = (cata) => {
        props.onFilterCataProduct(cata);
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

    listProducts = listProducts.filter((proudct) => {
        let resuld = [];
        filterCata.filter((cata) => {
            if (proudct.type === cata) {
                resuld = cata;
            }
        },{})
        return filterCata.length <= 0 ? proudct : proudct.type === resuld;
    })

    const onPrevPages = () => {
        if (currentPage - 1 < 2) {
            setCurrentPage(currentPage - 1);
            setDisabled(true);

        } else {
            setCurrentPage(currentPage - 1);
        }
    }

    const onNextPages = () => {

        setCurrentPage(currentPage + 1);

    }


    const reversedItems = listProducts.map(item => item);
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    listProducts = reversedItems.slice(indexOfFirstNews, indexOfLastNews);//data đã phan trang
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reversedItems.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }



    const showProduct = listProducts.map((product, index) => {
        return (
            <div className={view === 1 ? 'col-md-6' : 'col-md-12 list_product_grid_row'} key={index}>
                <Product
                     product={product}
                    onProductDetail={(id) => onProductDetail(id)}
                    onAddToCart={(product) => onAddToCart(product)}
                />
            </div>
        )
    },{});




    return (
        <div>
            <section className="solid_banner_area">
                <Container>
                    <div className="solid_banner_inner">
                        <h3>Product List</h3>
                        <ul>
                            <li><Link to="/">Home /</Link></li>
                            <li><Link to="/product">&nbsp;Product</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>

            <section className="categories_product_main p_80">
                <Container>
                    <div className="categories_main_inner">
                        <Row className="row_disable">
                            <Col md="3" className="float-md-right">
                                <div className="categories_sidebar">
                                    <FilterProduct
                                        onFilter={(filterName) => onFilter(filterName)}
                                        onFilterPrice={(value) => onFilterPrice(value)}
                                        onFilterCata={(cata) => onFilterCata(cata)}
                                    />

                                </div>
                            </Col>

                            <Col md="9" className="float-md-right">
                                <div className="showing_fillter">
                                    <Row className="m0">
                                        <div className="first_fillter">
                                            <h4>Showing 1 to {newsPerPage} of {reversedItems.length} total</h4>
                                        </div>
                                        <div className="secand_fillter">
                                            <h4>Show : </h4>
                                            <select className="selectpicker" onChange={select} value={newsPerPage}  >
                                                <option value={10} >10 item</option>
                                                <option value={8} >8 item</option>
                                                <option value={6} >6 item</option>
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
                                    </Row>
                                </div>
                                <div className="categories_product_area">
                                    <div className="Filter_Resuld">
                                        <span className="span_Resuld">Có {reversedItems.length} kết quả được tìm thấy</span>
                                    </div>

                                    <Row>
                                        {

                                            showProduct
                                        }
                                    </Row>
                                </div>
                                <nav aria-label="Page navigation example" className="pagination_area">
                                    <ul className="pagination" id="page-numbers">

                                        {(reversedItems.length / newsPerPage) > 1 ? <li className={(disabled && currentPage === 1) ? 'page-item btnPrev disabled' : 'page-item btnPrev'} id="btnPrev" onClick={onPrevPages}>{"<"}</li> : ""}

                                        {
                                            pageNumbers.map(number => {
                                                if (currentPage === number) {
                                                    return (
                                                        <li key={number} id={number} className="active page-item">
                                                            {number}
                                                        </li>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <li key={number} id={number} onClick={chosePage} className="page-item">
                                                            {number}
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                        {(reversedItems.length / newsPerPage) > 1 ? <li className={(disabled && currentPage === (reversedItems.length / newsPerPage)) ? 'page-item btnNext disabled' : 'page-item btnNext'} onClick={onNextPages}>{">"}</li> : ""}
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </div>
                </Container>
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
        },
        onFilterCataProduct: (cata) => {
            dispatch(actFilterCataProduct(cata));
        }

    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.products.productList,
        sort: state.sortProduct,
        filterName: state.filterProduct.name,
        filterPrice: state.filterProduct.filterPrice,
        filterCata: state.filterProduct.filterCata,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);