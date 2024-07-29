import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import shopnewarrival from '../img/shop-new-arrival-img.png';
import themeimg1 from '../img/themed-img-1.png';
import thmeimg2 from '../img/themed-img-2.png';
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import ProdImage5 from '../img/ratemystation-prod-img-5.png';
import ProdImage6 from '../img/ratemystation-prod-img-6.png';
import ProdImage7 from '../img/ratemystation-prod-img-7.png';
import ProdImage8 from '../img/ratemystation-prod-img-8.png';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';
import MyCartSD from '../MyCartSD/MyCartSD'; // Import MyCartSD
import { baseurl } from '../baseurl';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [viewCart, setViewCart] = useState(false); // State to toggle between shop and cart views
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`${baseurl}/products`); // Update this with your API endpoint
          const formattedProducts = response.data.map(product => ({
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

    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
      };
    // const addToCart = (product) => {
        const addToCart = async (product) => {
        console.log('product' , product)
        const storedUser = getUserFromLocalStorage();
        const { id, image, name, price } = product;
        try {
            const response = await axios.post(`${baseurl}/addtocart`,  {
              product_id:id,
              image,
              name,
              price,
              userId:storedUser.id
            });
      
            // setMessage('User created successfully');
            // Optionally, clear the form or redirect the user
           
     
           
          } catch (err) {
            console.error('Error:', err);
    
          }
        // setCart((prevCart) => [...prevCart, product]);
        // console.log("Product added to cart:", product);
        // alert(`Added ${product.name} to cart!`);
    };

    const proddetail = () => {
        navigate('/productdetail');
    };

    const shop = () => {
        navigate('/shop');
    };
    


    return (
        <>
            <Header />
            {viewCart ? (
                <MyCartSD products={products} /> // Render MyCartSD with cart data
            ) : (
                <>
                    <section className="shop-first-banner-sec">
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <div className="shop-new-arrival">
                                        <h6>New Arrival</h6>
                                        <h3>America Needs Local News Hoodie</h3>
                                        <p>
                                            Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo
                                            natoque pulvinar eu, interdum.
                                        </p>
                                        <a href="#">Discover now</a>
                                        <div className="shop-new-arrival-img">
                                            <img src={shopnewarrival} alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <Row>
                                        <Col lg={12} md={6}>
                                            <div className="shop-friend-themed">
                                                <h4>FRIENDS Themed <br /> Anchor Bucket Hat</h4>
                                                <a href="#">Shop now</a>
                                                <div className="themed-abslt-img themed-cap">
                                                    <img src={themeimg1} alt="" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="shop-friend-themed">
                                                <h4>New Dope <br /> Mug Design</h4>
                                                <a href="#">Shop now</a>
                                                <div className="themed-abslt-img theme-mug">
                                                    <img src={thmeimg2} alt="" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="shop-product-search-sec">
                        <Container>
                            <Row>
                                <Col lg={8} md={6}>
                                    <div className="newsletter-article-search">
                                        <input type="search" placeholder="Search product..." />
                                        <span><RiSearchLine /></span>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="filter-short-box">
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <div className="filter-box">
                                                    <p>Filter:</p>
                                                    <select name="" id="">
                                                        <option value="">Writer</option>
                                                        <option value="">Writer</option>
                                                        <option value="">Writer</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="filter-box">
                                                    <p>Short:</p>
                                                    <select name="" id="">
                                                        <option value="">Newest</option>
                                                        <option value="">Newest</option>
                                                        <option value="">Newest</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="ratemystation-shop-sec">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="heading-see-all">
                                        <h3>Best Sellers</h3>
                                        <a href="#" onClick={({mycart}) => setViewCart(true)}>View Cart</a> Toggle view to MyCartSD
                                        {/* <a href="#" onClick={() => navigate("/mycart")}>View Cart</a> */}
                                    </div>
                                </Col>
                            </Row>
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
                                                    <button onClick={proddetail} variant="light" className="prod-light-btn">View Details</button>
                                                    <button onClick={() => addToCart(product)} variant="dark" className="prod-dark-btn">Add to cart</button>
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
                </>
            )}
            <Footerah />
        </>
    );
};

export default Shop;