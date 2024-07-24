import React, { useState } from "react";
import { Tabs, Alert } from "flowbite-react";
import { Col, Container, Row } from "react-bootstrap";
import employerratemystation from "../img/employer-ratemy-station.png";
import EmployerRegisterForm from "../EmployerRegisterForm/EmployerRegisterForm";
import EmployerNewsroomForm from "../EmployerNewsroomForm/EmployerNewsroomForm";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EmployerRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscription: 'free'
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const subsribe = () => navigate("/subscription");

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
        type: formData.subscription
      });

      setMessage('User created successfully');
      // Optionally, clear the form or redirect the user
      setFormData({
        username: '',
        email: '',  
        password: '',
        confirmPassword: '',
        subscription: 'free'
      });
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Server Error');
    }
  };

  return (
    <>
      <Header />
      <section className="employer-login-pg-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="employer-login-box">
                <Row>
                  <Col lg={6} className="p-0">
                    <div className="rating-real-journalist">
                      <img src={employerratemystation} alt="" />
                      <h3>Find thousands of Ratings from real Journalists</h3>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="employer-newroom-box">
                      <Tabs aria-label="Pills" style="pills">
                        <Tabs.Item active title="Employee">
                          <EmployerRegisterForm
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                          />
                        </Tabs.Item>
                        <Tabs.Item title="Newsroom">
                          <EmployerNewsroomForm
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                          />
                        </Tabs.Item>
                      </Tabs>
                    </div>
                    <div className="employer-dont-have-acc">
                      <a href="#">
                        This is recurring subscription that you can cancel
                        anytime. <span onClick={subsribe}>Learn more</span>
                      </a>
                    </div>
                    <div className="employer-register-btn">
                      <a
                        href="#"
                        onClick={handleFormSubmit}
                      >
                        Register
                      </a>
                      <div className="employer-input-checkbox">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">Terms & conditions</label>
                      </div>
                    </div>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default EmployerRegisterPage;

