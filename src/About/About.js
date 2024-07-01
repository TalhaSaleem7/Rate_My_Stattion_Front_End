 
import React from 'react'

import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import ValeriaImage  from "../img/Valeria-Sistrunk.png";
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
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';
import { useNavigate } from 'react-router-dom';


const About = () => {


  const navigate = useNavigate();

  const proddetail = () => {
    navigate('/productdetail')
  }

  const mycart = () => {
    navigate('/mycart')
  }

  const shop = () => {
    navigate('/shop')
  }

  return (
    <>
    <Header/>

     <section className="ratemystation-about-sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="ratemystation-about-txt">
              <h3>
                RateMyStation.com is an honest place for anyone to learn more about a news station they want to work for one day.
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>




    <section className="about-us-sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="about-us-txt">
              <h6>About Us</h6>
              <h4>
                We offer a safe place for people in TV news to anonymously review a news station they work for, or have worked for in the past, without fear of retribution.
              </h4>
              <h4>
                Plus, you can subscribe to our job center for access to job applications, hand picked from the most highly rated stations.
              </h4>
              <h4>
                Rate My Station also offers a newsletter written by two women who still work in the business, and a Vlog produced by the website’s creator, Valeria.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>




    <section className="from-the-creator-sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="from-the-creator-box">
              <h6>From the Creator</h6>
              <Row>
                <Col lg={6}>
                  <div className="about-creator-txt">
                    <h5>
                      I want to start off by saying if you’ve contributed to my website by submitting a review, subscribing to the job center, purchasing apparel or sharing an article THANK YOU!!!
                    </h5>
                    <div className="about-creator-img">
                      <img src={ValeriaImage} alt="Valeria Sistrunk" />
                      <div className="about-creator-img-name">
                        <h4>Valeria Sistrunk</h4>
                        <h6>RateMyStation.com Creator</h6>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="about-creator-para">
                    <p>I decided to create Rate My Station in November 2017, almost a year after I left the newsroom forever.</p>
                    <p>For years I worked as a Reporter/MMJ/Anchor, and spent time at two news stations that just weren’t right for me. In fact, my last News Director created such a toxic work environment I eventually lost my passion for local news. So I left.</p>
                    <p>A few months later, I decided to do something to help prevent others from being trapped in a toxic newsroom.</p>
                    <p>If you’ve ever worked for a bad news station, then you know how difficult, and risky, it can be to try and warn new hires about what’s really going on in the newsroom. Plus, News Directors are always great at hiding anything that might make us reconsider taking the job.</p>
                    <p>So I created this website, to shine a light on the newsrooms you should probably avoid, while highlighting the news stations you’ll definitely want to apply to.</p>
                    <p>Today, Rate My Station has helped thousands find the best news station to work for, and with your support, we can help thousands more in the future!</p>
                  </div>
                </Col>
                <Col lg={2} md={2}>
                  <div className="inverted-commma-icon">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="67" viewBox="0 0 88 67" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M45.3034 66.1104V34.7972L67.8077 0.41571H87.262L75.718 28.1016L84.3992 29.0574V66.1104H45.3034ZM69.9702 31.493L81.2603 4.41571H69.9702L49.3034 35.9899V62.1104H80.3992V32.6412L69.9702 31.493ZM0.621094 66.1104V34.7972L23.1254 0.41571H42.5797L31.0357 28.1016L39.7169 29.0574V66.1104H0.621094ZM25.2879 31.493L36.578 4.41571H25.2879L4.62109 35.9899V62.1104H35.7169V32.6412L25.2879 31.493Z" fill="#9BDB08"/>
                      </svg>
                    </span>
                  </div>
                </Col>
                <Col lg={10} md={10}>
                  <div className="creator-messages">
                    <h6>Creator messages</h6>
                    <h4 className="mb-4">Last, but not least, we sell newsroom specific apparel you won’t find anywhere else!</h4>
                    <h4>So take a look around, and help the website grow by submitting a review, sharing an article from our newsletter or making a purchase from our store!</h4>
                  </div>
                </Col>
              </Row>
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
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage1} alt="Don’t Make Me Use My News Voice Face Mask" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                <h6>$18.00</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage2} alt="America Needs Local News Sweatshirt" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Sweatshirt</h3>
                <h6>$25.00 – $33.50</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
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
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
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
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
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
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage6} alt="America Needs Local News Bar Chain Bracelet" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Bar Chain Bracelet</h3>
                <h6>$30.50 – $33.50</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage7} alt="America Needs Local News Mug" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Mug</h3>
                <h6>$11.00 – $15.50</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
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
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
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

    <Footerah/>
    </>
  )
}

export default About