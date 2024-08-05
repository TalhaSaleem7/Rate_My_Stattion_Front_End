import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Slider from "react-slick";
import JournalImage from "../img/journal-report.png";
import JournalImageOne from "../img/journal-report-1.png"
import JournalImageTwo from "../img/journal-report-2.jpg"
import NewsletterLatestArticleImg from "../img/newsletter-latestarticle-img.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import NewsletterArticleImg2 from "../img/newsletter-article-img-2.png";
import NewsletterArticleImg3 from "../img/newsletter-article-img-3.png";
import NewsletterArticleImg4 from "../img/newsletter-article-img-4.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import { RiTimeLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import {
  RiMore2Fill,
  RiThumbUpFill,
  RiChat3Fill,
  RiShareFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { baseurl } from '../baseurl';

const Newsletter = () => {

  
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
    console.log('product', product)
    const storedUser = getUserFromLocalStorage();
    const { id, image, name, price } = product;
    try {
      const response = await axios.post(`${baseurl}/addtocart`, {
        product_id: id,
        image,
        name,
        price,
        userId: storedUser.id
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

  const notify = () => toast("Product Added to Cart!");

  const handleButtonClick = (product) => {
    addToCart(product);
    notify();
  };

  const proddetail = () => {
    navigate("/productdetail");
  };

  const mycart = () => {
    navigate("/mycart");
  };

  const shop = () => {
    navigate("/shop");
  };

  const newsletter = () => {
    navigate("/newsletter");
  };

  const goto = () => {
    navigate("/newsletterarticle");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,        
    autoplaySpeed: 3000,   
  };

  return (
    <>
      <Header />
      <section className="your-journalism-sec">
        <Container>
          <Row>
          <Slider {...settings}>
            <Col lg={12}>
              <div className="journalism-img-txt">
                <div className="your-journalism-img">
                  <img src={JournalImage} alt="Journal Report" />
                </div>
                <div className="your-journalism-txt">
                  <h3>
                    Can Starting In A Top 50 Market Really Ruin Your Journalism
                    Career?
                  </h3>
                  <div className="journal-date-written">
                    <p>
                      <RiTimeLine /> May 24, 2022
                    </p>
                    <p>
                      Written by <span>Soul Witness</span>
                    </p>
                  </div>
                  <div className="journalism-slider">
                  
                      <div>
                        <h5>
                          Feugiat sagittis, turpis et a fermentum blandit amet
                          in phasellus. Nibh nunc ultrices ac at at sit purus
                          pellentesque a. Urna, eget elit at risus tempus, fames
                          amet. Nulla cursus diam vel amet lacus, sem id. Cursus
                          auctor pulvinar dignissim mauris non ultrices. Sed.
                        </h5>
                      </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="journalism-img-txt">
                <div className="your-journalism-img">
                  <img src={JournalImageOne} alt="Journal Report" />
                </div>
                <div className="your-journalism-txt">
                  <h3>
                  Elementum quis aliquam vitae convallis. Nam eu id integer nec. 
                  </h3>
                  <div className="journal-date-written">
                    <p>
                      <RiTimeLine /> May 24, 2022
                    </p>
                    <p>
                      Written by <span>Soul Witness</span>
                    </p>
                  </div>
                  <div className="journalism-slider">
                  
                      <div>
                        <h5>
                            Sed nisl, cras morbi in porttitor magna egestas quis id. Velit nisi interdum feugiat viverra at tortor. Neque, natoque semper feugiat massa habitasse sit et. Tortor vehicula sed magna enim justo porta pellentesque pellentesque. Varius auctor ipsum eget imperdiet ac. 
                        </h5>
                      </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="journalism-img-txt">
                <div className="your-journalism-img">
                  <img src={JournalImageTwo} alt="Journal Report" />
                </div>
                <div className="your-journalism-txt">
                  <h3>
                    Scelerisque aliquet viverra tincidunt eget mi commodo cursus hac ut. 
                  </h3>
                  <div className="journal-date-written">
                    <p>
                      <RiTimeLine /> May 24, 2022
                    </p>
                    <p>
                      Written by <span>Soul Witness</span>
                    </p>
                  </div>
                  <div className="journalism-slider">
                  
                      <div>
                        <h5>
                          Feugiat sagittis, turpis et a fermentum blandit amet
                          in phasellus. Nibh nunc ultrices ac at at sit purus
                          pellentesque a. Urna, eget elit at risus tempus, fames
                          amet. Nulla cursus diam vel amet lacus, sem id. Cursus
                          auctor pulvinar dignissim mauris non ultrices. Sed.
                        </h5>
                      </div>
                  </div>
                </div>
              </div>
            </Col>
            </Slider>
          </Row>
        </Container>
      </section>

      <section className="articles-writer-sec">
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <div className="newsletter-article-search">
                <input type="search" placeholder="Search articles or writer" />
                <span className="newsletter_search">
                  <RiSearchLine />
                </span>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="filter-short-box">
                <div className="filter-box">
                  <p>Filter:</p>
                  <Form.Select>
                    <option value="">Writer</option>
                    <option value="">Writer</option>
                    <option value="">Writer</option>
                  </Form.Select>
                </div>
                <div className="filter-box">
                  <p>Short:</p>
                  <Form.Select>
                    <option value="">Newest</option>
                    <option value="">Newest</option>
                    <option value="">Newest</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-article-recommend-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="newsletter-latest-article-box">
                <h3>Latest Articles</h3>
                {/* Article 1 */}
                <div className="latest-article-box" onClick={goto}>
                  <img src={NewsletterLatestArticleImg} alt="Latest Article" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
                      <span>
                        <RiMore2Fill />
                      </span>
                    </div>
                    <h4>
                      10 Ways To Stay Healthy While Working A Crazy News
                      Schedule
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>Soul Witness</span>
                        </p>
                        <div className="newsletter-likecomment-share">
                          <span>
                            <RiThumbUpFill /> 35
                          </span>
                          <span>
                            <RiChat3Fill /> 25
                          </span>
                          <span>
                            <RiShareFill /> 15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Article 2 */}
                <div className="newsletter-slide-article" onClick={goto}>
                  <img src={NewsletterArticleImg2} alt="Latest Article" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
                      <span>
                        <RiMore2Fill />
                      </span>
                    </div>
                    <h4>
                      10 Ways To Stay Healthy While Working A Crazy News
                      Schedule
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>Soul Witness</span>
                        </p>
                        <div className="newsletter-likecomment-share">
                          <span>
                            <RiThumbUpFill /> 35
                          </span>
                          <span>
                            <RiChat3Fill /> 25
                          </span>
                          <span>
                            <RiShareFill /> 15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Article 3 */}
                <div className="newsletter-slide-article" onClick={goto}>
                  <img src={NewsletterArticleImg3} alt="Latest Article" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
                      <span>
                        <RiMore2Fill />
                      </span>
                    </div>
                    <h4>
                      10 Ways To Stay Healthy While Working A Crazy News
                      Schedule
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>Soul Witness</span>
                        </p>
                        <div className="newsletter-likecomment-share">
                          <span>
                            <RiThumbUpFill /> 35
                          </span>
                          <span>
                            <RiChat3Fill /> 25
                          </span>
                          <span>
                            <RiShareFill /> 15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Article 4 */}
                <div className="newsletter-slide-article" onClick={goto}>
                  <img src={NewsletterArticleImg4} alt="Latest Article" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
                      <span>
                        <RiMore2Fill />
                      </span>
                    </div>
                    <h4>
                      10 Ways To Stay Healthy While Working A Crazy News
                      Schedule
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>Soul Witness</span>
                        </p>
                        <div className="newsletter-likecomment-share">
                          <span>
                            <RiThumbUpFill /> 35
                          </span>
                          <span>
                            <RiChat3Fill /> 25
                          </span>
                          <span>
                            <RiShareFill /> 15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsletter-pagination-slide">
                  <div className="pagination">
                    <a href="#">
                      <RiArrowLeftSLine />
                    </a>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">
                      <RiArrowRightSLine />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="newsletter-side-sec">
                <div className="newsletter-side-head newsletter-side-head-alt">
                  <h3>Recommend</h3>
                  <a onClick={newsletter}>See all</a>
                </div>
                <Newslettersidesd />
                {/* Follow Us */}
                <div className="newsletter-follow-box">
                  <h4>Follow RMS</h4>
                  <div className="follow-us-rate">
                    <ul>
                      <li>
                        <a href="#">
                          <RiFacebookFill /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiInstagramLine /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiTwitterFill /> @RateMyStation{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
               <div className="latesthomepg-line">
                  <hr/>
               </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ratemystation-shop-sec">
        <h4>RateMyStation's Shop</h4>

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
                      <button onClick={proddetail} variant="light" className="prod-light-btn">View Details</button>
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

      <Footerah />
    </>
  );
};

export default Newsletter;
