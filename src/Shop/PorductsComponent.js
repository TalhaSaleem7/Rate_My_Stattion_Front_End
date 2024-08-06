// BestSellersSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

const ProductsComponent = ({ products, proddetail, handleButtonClick, BestsellerImage }) => {
    return (
        <section className="ratemystation-shop-sec">
            <Container>
                <Row>
                {products.map((product) => (
                                    <Col key={product.id} lg={3} md={4}>
                                        <div className="ratemystation-shop-prod">
                                            <img src={product.image} alt={product.name} />
                                            <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
                                            <div className="ratemystation-prod-txt">
                                                <h3>{product.name}</h3>
                                                <h6>${product.price.toFixed(2)}</h6>
                                                <div className="ratemystation-prod-btn">
                                                    <button onClick={() => proddetail(product.id)} variant="light" className="prod-light-btn">View Details</button>
                                                    <button onClick={() => handleButtonClick(product)} variant="dark" className="prod-dark-btn">Add to cart</button>
                                                    <ToastContainer />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProductsComponent;
