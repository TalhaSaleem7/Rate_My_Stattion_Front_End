import React, { useState } from 'react';
import { Tabs } from "flowbite-react";
import { Col, Container, Row } from 'react-bootstrap';
import employerratemystation from "../img/employer-ratemy-station.png";
import EmployerRegisterForm from '../EmployerRegisterForm/EmployerRegisterForm';
import EmployerNewsroomForm from '../EmployerNewsroomForm/EmployerNewsroomForm';

const EmployerRegisterPage = () => {
    return (
        <>

            <section className="employer-login-pg-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="employer-login-box">
                                <Row>
                                    <Col lg={6} className='p-0'>
                                        <div className="rating-real-journalist">
                                            <img src={employerratemystation} alt="" />
                                            <h3>Find thousands of Ratings from real Journalists</h3>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="employer-newroom-box">
                                            <Tabs aria-label="Pills" style="pills">
                                                <Tabs.Item active title="Employee">
                                                    <EmployerRegisterForm />
                                                </Tabs.Item>
                                                <Tabs.Item title="Newsroom">
                                                   <EmployerNewsroomForm/>
                                                </Tabs.Item>
                                            </Tabs>
                                        </div>
                                        <div className="employer-dont-have-acc">
                                            <a href="#">This is recurring subcription that you can cancel anytime. <span>Learn more</span></a>
                                        </div>
                                        <div className="employer-register-btn">
                                            <a href="#">Register</a>
                                            <div className="employer-input-checkbox">
                                                <input type="checkbox" name="" id="check" />
                                                <label htmlFor="check">Terms & conditions</label>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default EmployerRegisterPage