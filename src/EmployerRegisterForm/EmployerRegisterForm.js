import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const EmployerRegisterForm = () => {
  return (
    <>
      <div className="employer-register-form">
        <form action="">
          <Row>
            <Col lg={6}>
              <div className="employer-inputfield employerregister-field">
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" placeholder='Type your usename' />
              </div>
            </Col>
            <Col lg={6}>
              <div className="employer-inputfield employerregister-field">
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='Type your email' />
              </div>
            </Col>
            <Col lg={6}>
              <div className="employer-inputfield employerregister-field">
                <label htmlFor="">Password</label>
                <input type="text" name="" id="" placeholder='Type your usename' />
              </div>
            </Col>
            <Col lg={6}>
              <div className="employer-inputfield employerregister-field">
                <label htmlFor="">Confirm password</label>
                <input type="text" name="" id="" placeholder='Type your email' />
              </div>
            </Col>
            <Col lg={12}>
              <div className="employer-choose-subscription">
                <h6>Choose subcription</h6>
                <div className="free-subscribe-four">
                  <div className="employer-register-subscription">
                    <h3>Free</h3>
                    <h6>subcription</h6>
                  </div>
                  <div className="employer-subscription">
                    <h5>1 Month</h5>
                    <h6>subcription</h6>
                    <span>$34.95/m</span>
                  </div>
                  <div className="employer-subscription">
                    <h5>2 Month</h5>
                    <h6>subcription</h6>
                    <span>$19.95/m</span>
                    <h3 className='employer-save'>Save 30%</h3>
                  </div>
                  <div className="employer-subscription">
                    <h5>6 Month</h5>
                    <h6>subcription</h6>
                    <span>$9.95/m</span>
                    <h3 className='employer-save'>Save 40%</h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  )
}

export default EmployerRegisterForm