import React, { useState } from 'react';
import { Tabs } from "flowbite-react";
import { Col, Container, Row } from 'react-bootstrap';
import employerratemystation from "../img/employer-ratemy-station.png";
import EmployerLoginForm from '../Employerloginform/EmployerLoginForm';
import NewsroomLoginForm from '../NewsroomLoginForm/NewsroomLoginForm';

const EmployerLoginPg = () => {
    
    return (
        <>

            <section className="employer-login-pg-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="employer-login-box">
                                <Row>
                                    <Col lg={6}>
                                        <div className="rating-real-journalist">
                                            <img src={employerratemystation} alt="" />
                                            <h3>Find thousands of Ratings from real Journalists</h3>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="employer-newroom-box">
                                            <Tabs aria-label="Pills" style="pills">
                                                <Tabs.Item active title="Employee">
                                                    <EmployerLoginForm/>
                                                </Tabs.Item>
                                                <Tabs.Item title="Newsroom">
                                                    <NewsroomLoginForm/>
                                                </Tabs.Item>
                                            </Tabs>
                                        </div>
                                        <div className="employer-dont-have-acc">
                                            <a href="#">Don’t have any account? <span>Register here</span></a>
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

export default EmployerLoginPg