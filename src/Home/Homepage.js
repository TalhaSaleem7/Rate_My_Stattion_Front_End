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
import Chat from '../Sockets/Chats_Components/Chat';
import ProductsComponent from '../Shop/PorductsComponent';
import ProductsLimitedComponent from '../Shop/ProductsLimitedComponent';

export const Homepage = () => {



  const navigate = useNavigate();

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
             
                {/* <div className="latest-rating-loadmore-btn">
                  <a href="#">Load more</a>
                </div> */}
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
            <ProductsLimitedComponent
              proddetail={proddetail}
              handleButtonClick={handleButtonClick}
              BestsellerImage={BestsellerImage}
            />
          </Row>
        </Container>
      </section>

      <Lookingforwork />

      <Footerah />
    </>
  );
};
