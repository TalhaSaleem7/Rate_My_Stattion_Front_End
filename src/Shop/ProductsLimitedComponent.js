// BestSellersSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { baseurl } from '../baseurl';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications
import { useNavigate } from 'react-router-dom';


const ProductsLimitedComponent = ({ proddetail, handleButtonClick, BestsellerImage }) => {
    
    const navigate = useNavigate();

    const shop = () => {
        navigate('/shop')
      }
      
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${baseurl}/getlimitedproducts`); // Update this with your API endpoint
                const formattedProducts = response.data.product.result.map(product => ({
                    ...product,
                    price: parseFloat(product.price) // Convert to number if necessary
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


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
                <Row>
                    <Col lg={12}>
                        <div className="ratemystation-allprod-btn">
                            <a onClick={shop}>See All Product</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductsLimitedComponent;
