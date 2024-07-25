import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';

const Contactus = () => {
  return (
    <>
    <Header/>
     <section className="ratemystation-contact-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="contact-form-station">
                            <Row>
                                <Col lg={6}>
                                    <div className="ratemystaion-contact-form">
                                        <h3>Contact Us</h3>
                                        <p>Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus
                                            commodo natoque pulvinar eu, interdum. Viverra tortor hac sollicitudin dictum
                                            sit.
                                            Condimentum eget et commodo sapien porta felis amet pellentesque. </p>
                                        <ul>
                                            <li><RiMapPin2Fill /> <span>2972 Westheimer Rd. <br />
                                                    Santa Ana, Illinois 85486</span></li>
                                            <li><RiPhoneFill /> 1234-0293913</li>
                                            <li><RiMailFill /> info@form.com</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="contact-form-fields">
                                        <form action="">
                                            <div className="input-field">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" id="name" name="name" placeholder="Type your name here..." />
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" name="email" placeholder="Type your email here..." />
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="message">Messages</label>
                                                <textarea id="message" name="message" placeholder="Type your Messages here..."></textarea>
                                            </div>
                                            <div className="contact-form-btn">
                                                <button type="submit">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="contact-latest-line">
                                <Col lg={12} className="p-0">
                                    <div className="contact-follow-topline">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="contact-latest-updates">
                                                    <p>For all the latest updates and more:</p>
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="contact-follow-like-btn">
                                                    <ul>
                                                        <li><RiFacebookFill /> Like us</li>
                                                        <li><RiInstagramLine /> Follow us</li>
                                                        <li><RiTwitterFill /> Follow us</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footerah/>
    </>
  )
}

export default Contactus