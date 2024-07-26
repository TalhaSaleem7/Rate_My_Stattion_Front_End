import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AmericonProductCart from '../AmericonProductCart/AmericonProductCart';
import MyCartCheckoutBox from '../MyCartCheckoutBox/MyCartCheckoutBox';
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';

const MyCartSD = ({ products }) => {
  // Convert products to the format needed by AmericonProductCart
  const AmericanProdData = (products || []).map((product) => ({
    title: product.name,
    rate: `$${product.price.toFixed(2)}`,
    image: product.image,
  }));

  const [counts, setCounts] = useState(Array(AmericanProdData.length).fill(1));

  const handleCountChange = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
  };

  const handleRemoveProduct = (index) => {
    const newCounts = counts.filter((_, i) => i !== index);
    const newProducts = AmericanProdData.filter((_, i) => i !== index);
    setCounts(newCounts);
    // Update products here if you need to reflect the changes
    // e.g., setProducts(newProducts)
  };

  const subtotal = AmericanProdData.reduce((total, product, index) => {
    const rate = parseFloat(product.rate.replace('$', ''));
    return total + rate * counts[index];
  }, 0);

  const shippingFee = subtotal > 100 ? 0 : 10; // Example: Free shipping for orders over $100
  const total = subtotal + shippingFee;

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
              <AmericonProductCart
                americanprod={AmericanProdData}
                counts={counts}
                onCountChange={handleCountChange}
                onRemoveProduct={handleRemoveProduct}
              />
            </Col>
            <Col lg={4}>
              <MyCartCheckoutBox subtotal={subtotal} shippingFee={shippingFee} total={total} />
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default MyCartSD;