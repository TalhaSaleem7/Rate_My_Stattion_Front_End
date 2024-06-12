import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Reportersd from '../reportersd/Reportersd';
import Newslettersidesd from '../Newslettersidesecsd/Newslettersidesd';
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import ProdImage5 from '../img/ratemystation-prod-img-5.png';
import ProdImage6 from '../img/ratemystation-prod-img-6.png';
import ProdImage7 from '../img/ratemystation-prod-img-7.png';
import ProdImage8 from '../img/ratemystation-prod-img-8.png';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';
import Lookingforwork from '../Lookingforwork/Lookingforwork';
import {RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';

  


export const Homepage = () => {
  return (
    <>
      <section className="first-banner-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="first-banner-txt">
                <h3>Find thousands of Ratings from real Journalists</h3>
                <div className="search-station-box">
                  <div className="select-station-drop">
                    <select name="" id="">
                      <option value="">TV News</option>
                      <option value="">Lorem ipsum</option>
                      <option value="">Lorem ipsum</option>
                    </select>
                  </div>
                  <div className="search-stations-input">
                    <input type="search" name="" id="" placeholder="Search Stations..." />
                    <span><i className="ri-search-line"></i></span>
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
                <Reportersd />
                <div className="latest-rating-loadmore-btn">
                  <a href="#">Load more</a>
                </div>
              </div>
            </Col>
            <Col lg={4}>
            <div class="newsletter-side-sec">
                <div class="newsletter-side-head">
                    <h3>Newsletter</h3>
                    <a href="#">See all</a>
                </div> 
                <Newslettersidesd />
                <div class="newsletter-follow-box">
                    <h4>Follow RMS</h4>
                    <div class="follow-us-rate">
                        <ul>
                        <li><a href="#"><RiFacebookFill /> @RateMyStation </a></li>
                        <li><a href="#"><RiInstagramLine /> @RateMyStation </a></li>
                        <li><a href="#"><RiTwitterFill />  @RateMyStation </a></li>
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
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage1} alt="Don’t Make Me Use My News Voice Face Mask" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                <h6>$18.00</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage2} alt="America Needs Local News Sweatshirt" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Sweatshirt</h3>
                <h6>$25.00 – $33.50</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage3} alt="Anonymous Source Onesie" />
              <div className="ratemystation-prod-txt">
                <h3>Anonymous Source Onesie</h3>
                <h6>$18.00</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage4} alt="You Are A PKG Framed Poster" />
              <div className="ratemystation-prod-txt">
                <h3>You Are A PKG Framed Poster</h3>
                <h6>$26.00 – $105.00</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage5} alt="#NewsBae Engraved Heart Necklace" />
              <div className="ratemystation-prod-txt">
                <h3>#NewsBae Engraved Heart Necklace</h3>
                <h6>$35.00</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage6} alt="America Needs Local News Bar Chain Bracelet" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Bar Chain Bracelet</h3>
                <h6>$30.50 – $33.50</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage7} alt="America Needs Local News Mug" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Mug</h3>
                <h6>$11.00 – $15.50</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage8} alt="Anchor Woman Pom-Pom Beanie" />
              <div className="ratemystation-prod-txt">
                <h3>Anchor Woman Pom-Pom Beanie</h3>
                <h6>$19.50</h6>
                <div className="ratemystation-prod-btn">
                  <Button href="#" variant="light" className="prod-light-btn">View Details</Button>
                  <Button href="#" variant="dark" className="prod-dark-btn">Add to cart</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="ratemystation-allprod-btn">
              <Button href="#">See All Products</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>


    <Lookingforwork />


    </>
  );
};
