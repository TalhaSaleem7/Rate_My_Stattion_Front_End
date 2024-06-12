import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Tabs } from "flowbite-react";
import { Col, Container, Row } from 'react-bootstrap'
import employerratemystation from "../img/employer-ratemy-station.png"

const EmployerLoginPG = () => {
    const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

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
                                                    <div className="employer-login-form">
                                                        <form action="">
                                                            <div className="employer-inputfield">
                                                                <label htmlFor="">Username</label>
                                                                <input type="text" name="" id="" placeholder='Type your usename here...' />
                                                            </div>
                                                            <div className="employer-inputfield">
                                                                <label htmlFor="password">Password</label>
                                                                <div style={{ position: 'relative' }}>
                                                                    <input
                                                                        type={passwordShown ? "text" : "password"}
                                                                        id="password"
                                                                        placeholder="Type your password here..."
                                                                        style={{ paddingRight: '30px' }} 
                                                                    />
                                                                    <span
                                                                        onClick={togglePasswordVisibility}
                                                                        style={{
                                                                            position: 'absolute',
                                                                            right: '10px',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            cursor: 'pointer'
                                                                        }}
                                                                    >
                                                                        {passwordShown ? <FaEyeSlash /> : <FaEye />}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="employer-login-btns">
                                                                <a href="#" className='employerloginbtn'>Login</a>
                                                                <a href="#" className='employerforgotbtn'>Forgot password?</a>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Tabs.Item>
                                                <Tabs.Item title="Newsroom">
                                                    <p className="text  -sm text-gray-500 dark:text-gray-400">Content 2</p>
                                                </Tabs.Item>
                                            </Tabs>
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

export default EmployerLoginPG