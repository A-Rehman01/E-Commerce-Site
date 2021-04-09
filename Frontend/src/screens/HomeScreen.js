import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProduct } from '../actions/productsActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductsCarousel from '../components/ProductsCarousel';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductsCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products &&
              products.map((product) => (
                <Col key={product._id} sm={12} lg={4} xl={3} md={6}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}{' '}
    </>
  );
};

export default HomeScreen;
