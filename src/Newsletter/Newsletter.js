import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Slider from "react-slick";
import JournalImage from '../img/journal-report.png';
import NewsletterLatestArticleImg from '../img/newsletter-latestarticle-img.png';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';
import NewsletterArticleImg2 from '../img/newsletter-article-img-2.png';
import NewsletterArticleImg3 from '../img/newsletter-article-img-3.png';
import NewsletterArticleImg4 from '../img/newsletter-article-img-4.png';
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import { RiTimeLine } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { RiMore2Fill, RiThumbUpFill, RiChat3Fill, RiShareFill, RiArrowLeftSLine, RiArrowRightSLine, RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Newslettersidesd from '../Newslettersidesecsd/Newslettersidesd';

const Newsletter = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <>
    <section className="your-journalism-sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="journalism-img-txt">
              <div className="your-journalism-img">
                <img src={JournalImage} alt="Journal Report" />
              </div>
              <div className="your-journalism-txt">
                <h3>Can Starting In A Top 50 Market Really Ruin Your Journalism Career?</h3>
                <div className="journal-date-written">
                  <p><RiTimeLine /> May 24, 2022</p>
                  <p>Written by <span>Soul Witness</span></p>
                </div>
                <div className="journalism-slider">
                  <Slider {...settings}>
                    <div>
                      <h5>Feugiat sagittis, turpis et a fermentum blandit amet in phasellus. Nibh nunc ultrices ac at at sit purus pellentesque a. Urna, eget elit at risus tempus, fames amet. Nulla cursus diam vel amet lacus, sem id. Cursus auctor pulvinar dignissim mauris non ultrices. Sed.</h5>
                    </div>
                    <div>
                      <h5>Feugiat sagittis, turpis et a fermentum blandit amet in phasellus. Nibh nunc ultrices ac at at sit purus pellentesque a. Urna, eget elit at risus tempus, fames amet. Nulla cursus diam vel amet lacus, sem id. Cursus auctor pulvinar dignissim mauris non ultrices. Sed.</h5>
                    </div>
                    <div>
                      <h5>Feugiat sagittis, turpis et a fermentum blandit amet in phasellus. Nibh nunc ultrices ac at at sit purus pellentesque a. Urna, eget elit at risus tempus, fames amet. Nulla cursus diam vel amet lacus, sem id. Cursus auctor pulvinar dignissim mauris non ultrices. Sed.</h5>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    


     <section className="articles-writer-sec">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="newsletter-article-search">
                <input type="search" placeholder="Search articles or writer" />   
                <span><RiSearchLine /></span>
            </div>
          </Col>
          <Col lg={4}>
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
              <div className="latest-article-box">
                <img src={NewsletterLatestArticleImg} alt="Latest Article" />
                <div className="newsletter-article-text">
                  <div className="newsletter-article-date">
                    <p>May 24, 2022</p>
                    <span><RiMore2Fill /></span>
                  </div>
                  <h4>10 Ways To Stay Healthy While Working A Crazy News Schedule</h4>
                  <div className="newsletter-written-likecomment">
                    <div className="newsletter-writtinsoul-txt">
                      <p>Written by <span>Soul Witness</span></p>
                      <div className="newsletter-likecomment-share">
                        <span><RiThumbUpFill /> 35</span>
                        <span><RiChat3Fill /> 25</span>
                        <span><RiShareFill /> 15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article 2 */}
              <div className="newsletter-slide-article">
                <img src={NewsletterArticleImg2} alt="Latest Article" />
                <div className="newsletter-article-text">
                  <div className="newsletter-article-date">
                    <p>May 24, 2022</p>
                    <span><RiMore2Fill /></span>
                  </div>
                  <h4>10 Ways To Stay Healthy While Working A Crazy News Schedule</h4>
                  <div className="newsletter-written-likecomment">
                    <div className="newsletter-writtinsoul-txt">
                      <p>Written by <span>Soul Witness</span></p>
                      <div className="newsletter-likecomment-share">
                        <span><RiThumbUpFill /> 35</span>
                        <span><RiChat3Fill /> 25</span>
                        <span><RiShareFill /> 15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article 3 */}
              <div className="newsletter-slide-article">
                <img src={NewsletterArticleImg3} alt="Latest Article" />
                <div className="newsletter-article-text">
                  <div className="newsletter-article-date">
                    <p>May 24, 2022</p>
                    <span><RiMore2Fill /></span>
                  </div>
                  <h4>10 Ways To Stay Healthy While Working A Crazy News Schedule</h4>
                  <div className="newsletter-written-likecomment">
                    <div className="newsletter-writtinsoul-txt">
                      <p>Written by <span>Soul Witness</span></p>
                      <div className="newsletter-likecomment-share">
                        <span><RiThumbUpFill /> 35</span>
                        <span><RiChat3Fill /> 25</span>
                        <span><RiShareFill /> 15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article 4 */}
              <div className="newsletter-slide-article">
                <img src={NewsletterArticleImg4} alt="Latest Article" />
                <div className="newsletter-article-text">
                  <div className="newsletter-article-date">
                    <p>May 24, 2022</p>
                    <span><RiMore2Fill /></span>
                  </div>
                  <h4>10 Ways To Stay Healthy While Working A Crazy News Schedule</h4>
                  <div className="newsletter-written-likecomment">
                    <div className="newsletter-writtinsoul-txt">
                      <p>Written by <span>Soul Witness</span></p>
                      <div className="newsletter-likecomment-share">
                        <span><RiThumbUpFill /> 35</span>
                        <span><RiChat3Fill /> 25</span>
                        <span><RiShareFill /> 15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter-pagination-slide">
                <div className="pagination">
                  <a href="#"><RiArrowLeftSLine /></a>
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#"><RiArrowRightSLine /></a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="newsletter-side-sec">
              <div className="newsletter-side-head">
                <h3>Recommend</h3>
                <a href="#">See all</a>
              </div>
              <Newslettersidesd />
              {/* Follow Us */}
              <div className="newsletter-follow-box">
                <h4>Follow RMS</h4>
                <div className="follow-us-rate">
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


    


    </>
  );
};

export default Newsletter;
