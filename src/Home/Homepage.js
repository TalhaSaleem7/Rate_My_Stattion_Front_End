import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Row, Col } from "react-bootstrap";
import Reportersd from "../reportersd/Reportersd";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import ProdImage5 from "../img/ratemystation-prod-img-5.png";
import ProdImage6 from "../img/ratemystation-prod-img-6.png";
import ProdImage7 from "../img/ratemystation-prod-img-7.png";
import ProdImage8 from "../img/ratemystation-prod-img-8.png";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import Lookingforwork from "../Lookingforwork/Lookingforwork";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiSearchLine,
  RiThumbUpFill,
  RiFlagFill,
} from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import HomeSelectOption from "../Homeselectoption/HomeSelectOption";
import { baseurl } from '../baseurl';

export const Homepage = () => {

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


  const searchstaion = () => navigate("/stationsearchresult");
  console.log("Screen Width", window.innerWidth)

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchByName, setIsSearchByName] = useState(false);

  const toggleSearchMode = () => {
    setIsSearchByName(!isSearchByName);
  };

  return (
    <>
      <Header />
      <section className="first-banner-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="first-banner-txt">
                <h3>Find thousands of Ratings from real Journalists</h3>
                {/* <div className="search-station-box">
                  <HomeSelectOption/>
                  <div className="search-stations-input">
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search Stations..."
                    />
                    <span>
                      {" "}
                      <RiSearchLine onClick={searchstaion} />
                    </span>
                  </div>
                </div>
                <a href="#">Find a News Director by name</a> */}
                <div className={`search-stations-input ${isSearchByName ? 'full-width' : ''}`}>
                  {isSearchByName ? (
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search News Director..."
                    />
                  ) : (
                    <>
                      <HomeSelectOption />
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search Stations..."
                      />
                    </>
                  )}
                  <span>
                    <RiSearchLine onClick={searchstaion} />
                  </span>
                </div>
                <a href="#" onClick={toggleSearchMode}>
                  {isSearchByName ? 'Find a Station by name' : 'Find a News Director by name'}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-rating-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="latest-rating-txt">
                <h3>Latest Ratings</h3>
                <Reportersd />
                <div class="latest-rating-box">
                  <div class="latest-rating-user-verified">
                    <div class="rating-user-box">
                      <img src={Latestuserratingicon} alt="" />
                      <div class="latest-rating-user-txt">
                        <h5>Reporter | MMJ (OMB)</h5>
                        <div className="jobdetail-click-btn">
                          <h6 onClick={toggleDetails}>
                            Job details{" "}
                            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                          </h6>
                          {isOpen && (
                            <div className="job-details">
                              <div className="job-detail">
                                <span>Yearly salary</span>
                                <p>+$100,000</p>
                              </div>
                              <div className="job-detail">
                                <span>Contract</span>
                                <p>3 years</p>
                              </div>
                              <div className="job-detail">
                                <span>Paired with a photog</span>
                                <p>When Necessary</p>
                              </div>
                              <div className="job-detail">
                                <span>Station market rank</span>
                                <p>Between #1-2</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="verified-rating-box">
                      <h6>
                        <span class="rating-of">Rating of</span>
                      </h6>
                      <div class="karc-txt-logo">
                        <img src={karbabclogo} alt="" />
                        <h4>KABC</h4>
                      </div>
                    </div>
                  </div>
                  <div class="review-news-director review-news-director-second">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="reporter-topline">
                          <hr />
                        </div>
                      </div>
                      <div class="col-lg-4 p-0">
                        <div class="director-urer">
                          <img src={reviewdirectorimg} alt="" />
                          <div class="director-name-txt">
                            <div class="news-director-current">
                              <h5>News Director</h5>
                              <a href="#">Current</a>
                            </div>
                            <h3>Brooklyn Simmons</h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="review-director-para">
                          <h6>Review of News Director</h6>
                          <h5>
                            Nice guy, but lacks decisiveness, leadership, and
                            aggressiveness.
                          </h5>
                          <p>
                            Eu elementum pellentesque nibh molestie. Tempor
                            purus sed pellentesque integer non. Nec sed tortor
                            nec quis tempor diam non turpis. Sed venenatis at
                            montes, leo tellus egestas. Nulla pharetra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="racial-discrimination">
                    <h6>While working here, this person experienced</h6>
                    <p>
                      Sexual discrimination, Racial discrimination, Sexual
                      harassment, An overall work environment
                    </p>
                  </div>
                  <div class="racial-discrimination">
                    <h6>Additional comments</h6>
                    <p>
                      One of the best places you could ever work. Very relaxed
                      environment.
                    </p>
                    <h5>
                      Everyone is the best at what they do. Management is great.
                      No complaints. Eu pellentesque nibh...{" "}
                      <a href="#">see more</a>
                    </h5>
                  </div>
                  <div class="newroom-coworker-box">
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Newsroom rating</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.148438"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9414"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7363"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.529"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="167.324"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                          </svg>
                          <h5>This newsroom is friendly</h5>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Coworkers rating</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.164185"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9572"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7521"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.545"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="167.34"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                          </svg>
                          <h5>Super friendly</h5>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Would recommend working here?</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.179932"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9729"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7678"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.561"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                            <rect
                              x="167.356"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                          </svg>
                          <h5>I'm not sure</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="four-select-tab">
                    <h5>Tags:</h5>
                    <ul>
                      <li>
                        <a href="">Organized</a>
                      </li>
                      <li>
                        <a href="">Positive</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                  </div>
                  <div class="like-report-submitted">
                    <div class="like-report-txt">
                      <ul>
                        <li>
                          <span>
                            <RiThumbUpFill />
                          </span>{" "}
                          Liked
                        </li>
                        <li>
                          <span>
                            <RiFlagFill />
                          </span>{" "}
                          Report
                        </li>
                      </ul>
                    </div>
                    <p>submitted: 03-24-21</p>
                  </div>
                  <div class="latest-rating-comment-box">
                    <div class="latest-commentor-img">
                      <img src={karbabclogo} alt="" />
                    </div>
                    <div class="latest-comment-txt-box">
                      <p>
                        Thank you for the review, we really appreciate it and we
                        will try to be even better. Thank you!
                      </p>
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                </div>
                <div className="latest-rating-loadmore-btn">
                  <a href="#">Load more</a>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div class="newsletter-side-sec">
                <div class="newsletter-side-head">
                  <h3 onClick={newsletter}>Newsletter</h3>
                  <a onClick={newsletter}>See all</a>
                </div>
                <Newslettersidesd />
                <div class="newsletter-follow-box">
                  <h4>Follow RMS</h4>
                  <div class="follow-us-rate">
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
          </Row>
          <Row>
            <Col lg={12}>
              <div className="latesthomepg-line">
                <hr />
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
          <Row>
            <Col lg={12}>
              <div className="ratemystation-allprod-btn">
                <a onClick={shop}>See All Product</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Lookingforwork />

      <Footerah />
    </>
  );
};
