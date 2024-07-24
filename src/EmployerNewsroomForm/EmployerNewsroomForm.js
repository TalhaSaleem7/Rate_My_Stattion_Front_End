import React from "react";
import { Col, Row } from "react-bootstrap";

const EmployerNewsroomForm = ({ formData, handleFormDataChange }) => {
  return (
    <div className="employer-register-form">
      <form>
        <Row>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type your username"
                value={formData.username}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                value={formData.email}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                value={formData.password}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
        
          <Col lg={12}>
            <div className="employer-choose-subscription">
              <h6>Choose subscription</h6>
              <div className="free-subscribe-four">
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '1 month' } })}
                >
                  <h5>1 Month</h5>
                  <h6>subscription</h6>
                  <span>$34.95/m</span>
                </div>
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '2 months' } })}
                >
                  <h5>2 Months</h5>
                  <h6>subscription</h6>
                  <span>$19.95/m</span>
                  <h3 className='employer-save'>Save 30%</h3>
                </div>
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '6 months' } })}
                >
                  <h5>6 Months</h5>
                  <h6>subscription</h6>
                  <span>$9.95/m</span>
                  <h3 className='employer-save'>Save 40%</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default EmployerNewsroomForm;
