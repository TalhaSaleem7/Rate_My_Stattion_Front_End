import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import americanprod1 from "../img/prod-cart-img-1.png";
import americanprod2 from "../img/prod-cart-img-2.png";
import americanprod3 from "../img/prod-cart-img-3.png";
import AmericonProductCart from "../AmericonProductCart/AmericonProductCart";
import MyCartCheckoutBox from "../MyCartCheckoutBox/MyCartCheckoutBox";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";

const AmericanProdData = [
  {
    title: "America Needs Local News Sweatshirt - Red",
    rate: "$33.50",
    image: americanprod1,
  },
  {
    title: "America Needs Local News Sweatshirt - Red",
    rate: "$33.50",
    image: americanprod2,
  },
  {
    title: "America Needs Local News Sweatshirt - Red",
    rate: "$33.50",
    image: americanprod3,
  },
];

const MyCartSD = () => {
  return (
    <>
      <Header />
      <section className="americon-product-card-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="americon-prod-card-txt">
                <h4>My Cart</h4>
              </div>
            </Col>
            <Col lg={8}>
              <div className="product-quality-total">
                <h4>Product</h4>
                <div className="mycart-qualitytotal">
                  <h4>Quantity</h4>
                  <h4>Total</h4>
                </div>
              </div>
              <AmericonProductCart americanprod={AmericanProdData} />
            </Col>
            <Col lg={4}>
              <MyCartCheckoutBox />
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default MyCartSD;
