import React from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  RiThumbUpFill,
  RiChat3Fill,
  RiShareFill,
  RiBookmarkFill,
  RiFlagFill,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiSearchLine,
  RiSaveFill,
  RiSendPlaneFill  
} from "react-icons/ri";

// Importing images
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import latestarticleImg from "../img/newsletter-latestarticle-img.png";
import userImg from "../img/newsletter-comment-user-img.png";
import userImg2 from "../img/newsletter-comment-user-img-2.png";
import soulWitnessImg from "../img/soul-witness-userimg.png";
import moreArticleImg1 from "../img/more-soul-articleimg.png";
import moreArticleImg2 from "../img/more-soul-articleimg-2.png";
import moreArticleImg3 from "../img/more-soul-articleimg-3.png";
import userCommentImg from "../img/newsletter-usercomment-type.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";

const NewsletterArticle = () => {
  const navigate = useNavigate();

  const mycart = () => {
    navigate("/mycart");
  };

  const proddetail = () => {
    navigate("/productdetail");
  };

  const shop = () => {
    navigate("/shop");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Header />
      <section className="newsletter-article-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="newsletter-article-detail">
                <div className="latest-article-box">
                  <img src={latestarticleImg} alt="" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
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
                <div className="newsletter-long-txt">
                  <Slider {...settings} className="newsletter-article-slider">
                    <div className="newsletter-article-decided">
                      <h4>
                        So you decided you want…no, you NEED…to be healthier.
                      </h4>
                      <p>
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum. Viverra tortor hac sollicitudin dictum sit.
                        Condimentum eget et commodo sapien porta felis amet
                        pellentesque.
                      </p>
                      <p>
                        Erat augue enim turpis risus urna, ut egestas vivamus
                        proin. Velit leo scelerisque pulvinar vestibulum in nunc
                        a tortor mollis. Fusce pretium est ipsum elementum
                        parturient. Venenatis, ac nulla non varius dolor. Ornare
                        consectetur mauris, adipiscing tristique a leo.
                      </p>
                      <p>
                        Habitant pharetra tellus habitasse vestibulum nibh
                        quisque. Sed vel condimentum enim leo tortor mi magna
                        tincidunt. Egestas bibendum id eget quisque semper
                        ultricies. Gravida viverra massa faucibus vestibulum
                        condimentum.
                      </p>
                      <p>
                        Pretium tortor venenatis, mattis lobortis. Sollicitudin
                        non sed eu, augue. Morbi purus ipsum ipsum ante felis.
                        Nisi, vulputate risus nisl, nulla amet morbi habitant
                        vel. Condimentum egestas vestibulum habitant vitae.
                        Faucibus bibendum lacinia volutpat nulla placerat semper
                        elementum gravida.
                      </p>
                      <p>
                        Mi vulputate arcu, at tincidunt enim sit eu platea leo.
                        Risus vitae in turpis elementum, viverra ultricies.
                        Commodo sed eget at massa, integer. Porta id id nisl
                        faucibus neque, purus. Fermentum enim, sed ut ultrices
                        amet turpis pharetra faucibus blandit. Aenean proin at
                        tortor tincidunt. Aenean sed ornare sit arcu mattis
                        amet, eget. Id sed amet cras urna et malesuada.
                      </p>
                    </div>
                    <div className="newsletter-article-decided">
                      <h4>
                        So you decided you want…no, you NEED…to be healthier.
                      </h4>
                      <p>
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum. Viverra tortor hac sollicitudin dictum sit.
                        Condimentum eget et commodo sapien porta felis amet
                        pellentesque.
                      </p>
                      <p>
                        Erat augue enim turpis risus urna, ut egestas vivamus
                        proin. Velit leo scelerisque pulvinar vestibulum in nunc
                        a tortor mollis. Fusce pretium est ipsum elementum
                        parturient. Venenatis, ac nulla non varius dolor. Ornare
                        consectetur mauris, adipiscing tristique a leo.
                      </p>
                      <p>
                        Habitant pharetra tellus habitasse vestibulum nibh
                        quisque. Sed vel condimentum enim leo tortor mi magna
                        tincidunt. Egestas bibendum id eget quisque semper
                        ultricies. Gravida viverra massa faucibus vestibulum
                        condimentum.
                      </p>
                      <p>
                        Pretium tortor venenatis, mattis lobortis. Sollicitudin
                        non sed eu, augue. Morbi purus ipsum ipsum ante felis.
                        Nisi, vulputate risus nisl, nulla amet morbi habitant
                        vel. Condimentum egestas vestibulum habitant vitae.
                        Faucibus bibendum lacinia volutpat nulla placerat semper
                        elementum gravida.
                      </p>
                      <p>
                        Mi vulputate arcu, at tincidunt enim sit eu platea leo.
                        Risus vitae in turpis elementum, viverra ultricies.
                        Commodo sed eget at massa, integer. Porta id id nisl
                        faucibus neque, purus. Fermentum enim, sed ut ultrices
                        amet turpis pharetra faucibus blandit. Aenean proin at
                        tortor tincidunt. Aenean sed ornare sit arcu mattis
                        amet, eget. Id sed amet cras urna et malesuada.
                      </p>
                    </div>
                    <div className="newsletter-article-decided">
                      <h4>
                        So you decided you want…no, you NEED…to be healthier.
                      </h4>
                      <p>
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum. Viverra tortor hac sollicitudin dictum sit.
                        Condimentum eget et commodo sapien porta felis amet
                        pellentesque.
                      </p>
                      <p>
                        Erat augue enim turpis risus urna, ut egestas vivamus
                        proin. Velit leo scelerisque pulvinar vestibulum in nunc
                        a tortor mollis. Fusce pretium est ipsum elementum
                        parturient. Venenatis, ac nulla non varius dolor. Ornare
                        consectetur mauris, adipiscing tristique a leo.
                      </p>
                      <p>
                        Habitant pharetra tellus habitasse vestibulum nibh
                        quisque. Sed vel condimentum enim leo tortor mi magna
                        tincidunt. Egestas bibendum id eget quisque semper
                        ultricies. Gravida viverra massa faucibus vestibulum
                        condimentum.
                      </p>
                      <p>
                        Pretium tortor venenatis, mattis lobortis. Sollicitudin
                        non sed eu, augue. Morbi purus ipsum ipsum ante felis.
                        Nisi, vulputate risus nisl, nulla amet morbi habitant
                        vel. Condimentum egestas vestibulum habitant vitae.
                        Faucibus bibendum lacinia volutpat nulla placerat semper
                        elementum gravida.
                      </p>
                      <p>
                        Mi vulputate arcu, at tincidunt enim sit eu platea leo.
                        Risus vitae in turpis elementum, viverra ultricies.
                        Commodo sed eget at massa, integer. Porta id id nisl
                        faucibus neque, purus. Fermentum enim, sed ut ultrices
                        amet turpis pharetra faucibus blandit. Aenean proin at
                        tortor tincidunt. Aenean sed ornare sit arcu mattis
                        amet, eget. Id sed amet cras urna et malesuada.
                      </p>
                    </div>
                  </Slider>
                  <div className="article-reactions">
                    <ul>
                      <li>
                        <a href="#">
                          <RiThumbUpFill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiChat3Fill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiShareFill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <RiBookmarkFill />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                          <RiFlagFill />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="newsletter-comment-box">
                    <p>2 Comment</p>
                    <div class="newsletter-detail-comment">
                      <img src={userImg} alt="" />
                      <div class="newsletter-comment-txt">
                        <div class="newsletter-detail-comment-para">
                          <h6>Cameron Williamson</h6>
                          <p>
                            Pretium tortor venenatis, mattis lobortis.
                            Sollicitudin non sed eu, augue. Morbi purus ipsum
                            ipsum ante felis. Nisi, vulputate risus nisl, nulla
                            amet morbi habitant vel. Condimentum egestas
                            vestibulum habitant.
                          </p>
                        </div>
                        <div class="newsletter-comment-reaction">
                          <ul>
                            <li>
                              <a href="#">Like</a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                            <li>
                              <a href="#">Permalink</a>
                            </li>
                          </ul>
                          <p>2 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div class="newsletter-detail-comment">
                      <img src={userImg2} alt="" />
                      <div class="newsletter-comment-txt">
                        <div class="newsletter-detail-comment-para">
                          <h6>Jenny Wilson</h6>
                          <p>
                            Pretium tortor venenatis, mattis lobortis.
                            Sollicitudin non sed eu, augue. Morbi purus ipsum
                            ipsum ante felis. Nisi, vulputate risus nisl, nulla
                            amet morbi habitant vel. Condimentum egestas
                            vestibulum habitant.
                          </p>
                        </div>
                        <div class="newsletter-comment-reaction">
                          <ul>
                            <li>
                              <a href="#">Like</a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                            <li>
                              <a href="#">Permalink</a>
                            </li>
                          </ul>
                          <p>2 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div class="newsletter-comment-input">
                      <img src={userCommentImg} alt="" />
                      <div class="newsletter-comment-typebox">
                        <input type="text" placeholder="Write comment..." />
                        <button type="submit">
                           <RiSendPlaneFill />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="other-newsletter-articles">
                    <div class="soul-witness-acc-subs">
                      <div class="soul-witness-user-imgtxt">
                        <img src={soulWitnessImg} alt="" />
                        <div class="soul-witness-txt">
                          <h4>Soul Witness</h4>
                          <h6>150 articles</h6>
                        </div>
                      </div>
                      <a href="#">Subcribe</a>
                    </div>
                    <div class="more-from-soul-witness-box">
                      <h5>More from Soul Witness</h5>
                      <div class="more-soul-article">
                        <img src={moreArticleImg1} alt="" />
                        <div class="more-soul-articletxt">
                          <h4>
                            So you decided you want…no, you NEED…to be
                            healthier.
                          </h4>
                          <span>
                            <i class="ri-time-line"></i> May 24, 2022
                          </span>
                        </div>
                      </div>
                      <div class="more-soul-article">
                        <img src={moreArticleImg2} alt="" />
                        <div class="more-soul-articletxt">
                          <h4>
                            So you decided you want…no, you NEED…to be
                            healthier.
                          </h4>
                          <span>
                            <i class="ri-time-line"></i> May 24, 2022
                          </span>
                        </div>
                      </div>
                      <div class="more-soul-article">
                        <img src={moreArticleImg3} alt="" />
                        <div class="more-soul-articletxt">
                          <h4>
                            So you decided you want…no, you NEED…to be
                            healthier.
                          </h4>
                          <span>
                            <i class="ri-time-line"></i> May 24, 2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div class="newsletter-side-sec">
                <div class="newsletter-input-search">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search articles or writer"
                  />
                  <span>
                    <RiSearchLine />
                  </span>
                </div>
                <div class="newsletter-side-head">
                  <h3>Newsletter</h3>
                  <a href="#">See all</a>
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
      <Footerah />
    </>
  );
};

export default NewsletterArticle;
