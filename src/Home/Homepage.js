import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
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
import TvShowsIcon from "../img/tv-shows-icon.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import Lookingforwork from "../Lookingforwork/Lookingforwork";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiSearchLine,
  RiThumbUpFill,
  RiFlagFill,
  RiVerifiedBadgeFill,
} from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const searchstaion = () => navigate("/stationsearchresult");

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

  return (
    <>
      <Header />
      <section className="first-banner-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="first-banner-txt">
                <h3>Find thousands of Ratings from real Journalists</h3>
                <div className="search-station-box">
                  <div className="select-station-drop">
                    <select name="" id="">
                      <img src={TvShowsIcon} alt="img" />
                      <option value=""> TV News</option>
                      <option value="">Lorem ipsum</option>
                      <option value="">Lorem ipsum</option>
                    </select>
                    <div className="select-tv-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="34"
                        viewBox="0 0 35 34"
                        fill="none"
                      >
                        <path
                          d="M34.9254 10.8782C34.9254 17.318 34.9254 23.7577 34.9254 30.2072C34.8184 30.5574 34.76 30.9271 34.6044 31.2578C33.9818 32.5322 32.9117 33.0964 31.5207 33.0964C22.2598 33.0964 13.0087 33.0964 3.7479 33.0964C3.42689 33.0964 3.08641 33.0769 2.77513 32.9894C1.26732 32.5808 0.333458 31.394 0.333458 29.8279C0.32373 23.641 0.314003 17.4736 0.343186 11.3062C0.343186 10.8198 0.459919 10.2848 0.67393 9.84704C1.26732 8.59216 2.32765 8.03767 3.69926 8.03767C7.94057 8.03767 12.1916 8.03767 16.4329 8.03767C16.5496 8.03767 16.6664 8.03767 16.8706 8.03767C14.7792 5.96566 12.7461 3.97147 10.7713 2.01619C11.1507 1.63681 11.5107 1.27688 11.8803 0.907227C13.962 2.95978 16.0827 5.04152 18.2228 7.15245C20.3629 5.05125 22.4836 2.96951 24.575 0.916954C24.9641 1.28661 25.3338 1.64654 25.7132 2.01619C23.6995 4.00065 21.6762 6.00457 19.5847 8.06686C19.8279 8.06686 19.9641 8.06686 20.0905 8.06686C23.8844 8.06686 27.6782 8.06686 31.472 8.06686C32.6199 8.06686 33.6218 8.41706 34.2833 9.38011C34.5849 9.81785 34.7114 10.3723 34.9254 10.8782ZM13.2714 13.0864C11.2869 13.0864 9.31218 13.0864 7.32772 13.0864C7.05534 13.0864 6.78296 13.0961 6.53004 13.1642C5.36271 13.4658 4.71095 14.3607 4.71095 15.6351C4.71095 18.9522 4.71095 22.2791 4.71095 25.5963C4.71095 27.2014 5.69345 28.1741 7.30826 28.1741C11.2675 28.1741 15.2364 28.1741 19.1956 28.1741C20.8201 28.1741 21.8123 27.1819 21.8123 25.5671C21.8123 22.2694 21.8123 18.9717 21.8123 15.674C21.8123 15.3919 21.7832 15.1098 21.7151 14.8374C21.4135 13.7187 20.5186 13.0767 19.2637 13.0767C17.2598 13.0864 15.2656 13.0864 13.2714 13.0864ZM27.756 21.676C26.219 21.676 24.9933 22.9017 24.9933 24.4387C24.9836 25.9854 26.2385 27.2305 27.7755 27.2208C29.3125 27.2111 30.5382 25.9854 30.5382 24.4484C30.5382 22.9017 29.3125 21.676 27.756 21.676ZM30.9273 13.6214C28.7969 13.6214 26.6957 13.6214 24.6139 13.6214C24.6139 14.1564 24.6139 14.672 24.6139 15.1778C26.7346 15.1778 28.8261 15.1778 30.9273 15.1778C30.9273 14.6526 30.9273 14.1467 30.9273 13.6214ZM30.9273 17.6001C28.7969 17.6001 26.6957 17.6001 24.6042 17.6001C24.6042 18.1254 24.6042 18.6312 24.6042 19.1565C26.7151 19.1565 28.8163 19.1565 30.9273 19.1565C30.9273 18.6215 30.9273 18.1254 30.9273 17.6001Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
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
                <a href="#">Find a News Director by name</a>
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
        </Container>
      </section>

      <section className="ratemystation-shop-sec">
        <h4>RateMyStation's Shop</h4>
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img
                  src={ProdImage1}
                  alt="Don’t Make Me Use My News Voice Face Mask"
                />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                  <h6>$18.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img
                  src={ProdImage2}
                  alt="America Needs Local News Sweatshirt"
                />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>America Needs Local News Sweatshirt</h3>
                  <h6>$25.00 – $33.50</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage3} alt="Anonymous Source Onesie" />
                <div className="ratemystation-prod-txt">
                  <h3>Anonymous Source Onesie</h3>
                  <h6>$18.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage4} alt="You Are A PKG Framed Poster" />
                <div className="ratemystation-prod-txt">
                  <h3>You Are A PKG Framed Poster</h3>
                  <h6>$26.00 – $105.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage5} alt="#NewsBae Engraved Heart Necklace" />
                <div className="ratemystation-prod-txt">
                  <h3>#NewsBae Engraved Heart Necklace</h3>
                  <h6>$35.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img
                  src={ProdImage6}
                  alt="America Needs Local News Bar Chain Bracelet"
                />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>America Needs Local News Bar Chain Bracelet</h3>
                  <h6>$30.50 – $33.50</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage7} alt="America Needs Local News Mug" />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>America Needs Local News Mug</h3>
                  <h6>$11.00 – $15.50</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage8} alt="Anchor Woman Pom-Pom Beanie" />
                <div className="ratemystation-prod-txt">
                  <h3>Anchor Woman Pom-Pom Beanie</h3>
                  <h6>$19.50</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="ratemystation-allprod-btn">
                <a onClick={shop}>See All Products</a>
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
