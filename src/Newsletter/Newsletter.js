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
import ProductsComponent from '../Shop/PorductsComponent';
import ProductsLimitedComponent from '../Shop/ProductsLimitedComponent';

const Newsletter = () => {


  const [products, setProducts] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseurl}/get-articles`); // Update this with your API endpoint
        const formattedProducts = response.data.data.map(product => ({
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


 

  const proddetail = () => {
    navigate("/productdetail");
  };

  const mycart = () => {
    navigate("/mycart");
  };


  const newsletter = () => {
    navigate("/newsletter");
  };

  const goto = (e) => {
    const news_data= localStorage.setItem("article", JSON.stringify(e));
    console.log(news_data,"TSSSS")
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
            {
              products.length>0?(
                products.map((e,i)=>(
              <Col lg={12}>
                <div className="journalism-img-txt" key={i}>
                  <div className="your-journalism-img">
                    <img src={e.image} alt="Journal Report" />
                  </div>
                  <div className="your-journalism-txt">
                    <h3>
                     {e.mainheading}
                    </h3>
                    <div className="journal-date-written">
                      <p>
                        <RiTimeLine /> May 24, 2022
                      </p>
                      <p>
                        Written by <span>{e.writer}</span>
                      </p>
                    </div>
                    <div className="journalism-slider">
                    
                        <div>
                          <h5>
                        {
                          e.description.length>300?e.description.slice(0,300)+ "...read more":e.description
                        }
                          </h5>
                        </div>
                    </div>
                  </div>
                </div>
              </Col>) )):(
                  
               
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
              )
            }
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
                  {/* <div className="your-journalism-txt">
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
                  
                  </div> */}
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
                {
                  products.length>0 ?( 
                    
                    <div className="latest-article-box" >
                    <img src={products[3].image} alt="Latest Article" />
                    <div className="newsletter-article-text">
                      <div className="newsletter-article-date">
                        <p>22 May 2024</p>
                        <span>
                          <RiMore2Fill />
                        </span>
                      </div>
                      <h4>
                        {products[3].mainheading}
                      </h4>
                      <div className="newsletter-written-likecomment">
                        <div className="newsletter-writtinsoul-txt">
                          <p>
                            Written by <span>{products[3].writer}</span>
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
                  </div>):( <div className="latest-article-box" onClick={goto}>
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
                </div>)  
                }
                {/* Article 2 */}

                {
                  products.length>0 && products.map((e,i)=>(

                <div className="newsletter-slide-article" onClick={()=>goto(e)} key={i}>
                  <img src={e.image} alt="Latest Article" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      <p>May 24, 2022</p>
                      <span>
                        <RiMore2Fill />
                      </span>
                    </div>
                    <h4>
                     {e.mainheading}
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>{e.writer}</span>
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
                  ))
                }
                
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
                <Newslettersidesd  />
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
          <ProductsLimitedComponent />
          </Row>         
        </Container>
      </section>

      <Footerah />
    </>
  );
};

export default Newsletter;
