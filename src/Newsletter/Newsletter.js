import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import Slider from "react-slick";
import JournalImage from '../img/journal-report.png';
import { RiTimeLine } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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






    </>
  );
};

export default Newsletter;
