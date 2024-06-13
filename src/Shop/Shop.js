import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';
import shopnewarrival from "../img/shop-new-arrival-img.png"
import themeimg1 from "../img/themed-img-1.png"
import thmeimg2 from "../img/themed-img-2.png"
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import ProdImage5 from '../img/ratemystation-prod-img-5.png';
import ProdImage6 from '../img/ratemystation-prod-img-6.png';
import ProdImage7 from '../img/ratemystation-prod-img-7.png';
import ProdImage8 from '../img/ratemystation-prod-img-8.png';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';

const Shop = () => {
  return (
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
                <Col lg={12}>
                  <div className="shop-friend-themed">
                    <h4>FRIENDS Themed <br /> Anchor Bucket Hat</h4>
                    <a href="#">Shop now</a>
                    <div className="themed-abslt-img themed-cap">
                      <img src={themeimg1} alt="" />
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="shop-friend-themed">
                    <h4>New Dope <br /> Mug Design</h4>
                    <a href="#">Shop now</a>
                    <div className="themed-abslt-img">
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
            <Col lg={8}>
              <div className="newsletter-article-search">
                <input type="search" placeholder="Search product..." />
                <span><RiSearchLine /></span>
              </div>
            </Col>
            <Col lg={4}>
              <div className="filter-short-box">
                <Row>
                  <Col lg={6}>
                    <div className="filter-box">
                      <p>filter:</p>
                      <select name="" id="">
                        <option value="">Writer</option>
                        <option value="">Writer</option>
                        <option value="">Writer</option>
                      </select>
                    </div>
                  </Col>
                  <Col lg={6}>
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



      <section>
        <Container>
          <Row></Row>
        </Container>
      </section>


      <section class="ratemystation-shop-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div class="heading-see-all">
                <h3>Best Sellers</h3>
                <a href="#">See all</a>
              </div>
            </Col>
          </Row>
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
        </Container>
      </section>




      <section class="ratemystation-shop-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div class="heading-see-all">
                <h3>New Arrivals</h3>
                <a href="#">See all</a>
              </div>
            </Col>
          </Row>
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
        </Container>
      </section>





      <section class="ratemystation-shop-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div class="shop-category">
                <h3>Category:</h3>
                <ul>
                  <li><button class="tablinks">T-shirt</button></li>
                  <li><button class="tablinks">Hoodie/Sweater</button></li>
                  <li><button class="tablinks">Hat</button></li>
                  <li><button class="tablinks">Baby</button></li>
                  <li><button class="tablinks">Accesories</button></li>
                  <li><button class="tablinks">Poster</button></li>
                  <li><button class="tablinks">Sticker</button></li>
                  <li><button class="tablinks">Bag</button></li>
                  <li><button class="tablinks">Mug</button></li>
                </ul>
              </div>
            </Col>
          </Row>
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
              <div class="ratemystation-allprod-btn">
                <a href="#">See All Product</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>





    </>
  )
}

export default Shop