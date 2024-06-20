import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiMapPin2Fill, RiMoneyDollarCircleFill, RiFlagFill, RiBookmarkFill, RiShareFill } from 'react-icons/ri';
import jobCompLogo from '../img/job-comp-logo.jpg';
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';


const Viewjobdetail = () => {

  const navigate = useNavigate()

  const proddetail = () => {
    navigate('/productdetail')
  }

  const mycart = () => {
    navigate('/mycart')
  }

  const shop = () => {
    navigate('/shop')
  }



  return (
    <>
     <section className="view-job-detail-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="job-detail-name-description">
                            <Row>
                                <Col lg={8}>
                                    <div className="job-detailpg-nameflex">
                                        <img src={jobCompLogo} alt="Job Company Logo" />
                                        <div className="job-detailpg-txt">
                                            <h3>Assistant News Director</h3>
                                            <h5>KABC</h5>
                                            <div className="assistant-city-dollar-time">
                                                <p><RiMapPin2Fill /> Los Angeles, CA</p>
                                                <p><RiMoneyDollarCircleFill /> $100,000 - $130,000</p>
                                                <p><RiMoneyDollarCircleFill /> Full time</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="job-select-opts">
                                        <a href="#">Apply Now</a>
                                        <div className="job-save-share">
                                            <a href="#"><RiBookmarkFill /> Save</a>
                                            <a href="#"><RiShareFill /> Share</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="view-job-detail-description">
                            <div className="job-desceiption-detail">
                                <h3>Job Description</h3>
                                <p>Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo
                                    natoque pulvinar eu, interdum. Viverra tortor hac sollicitudin dictum sit. Condimentum
                                    eget et commodo sapien porta felis amet pellentesque. Erat augue enim turpis risus urna,
                                    ut egestas vivamus proin. Velit leo scelerisque pulvinar vestibulum in nunc a tortor
                                    mollis. Fusce pretium est ipsum elementum parturient. Venenatis, ac nulla non varius
                                    dolor. Ornare consectetur mauris, adipiscing tristique a leo. Habitant pharetra tellus
                                    habitasse vestibulum nibh quisque. Sed vel condimentum enim leo tortor mi magna
                                    tincidunt. Egestas bibendum id eget quisque semper ultricies. Gravida viverra massa
                                    faucibus vestibulum condimentum.</p>
                                <p>Pretium tortor venenatis, mattis lobortis. Sollicitudin non sed eu, augue. Morbi purus
                                    ipsum ipsum ante felis. Nisi, vulputate risus nisl, nulla amet morbi habitant vel.
                                    Condimentum egestas vestibulum habitant vitae. Faucibus bibendum lacinia volutpat nulla
                                    placerat semper elementum gravida. Mi vulputate arcu, at tincidunt enim sit eu platea
                                    leo. Risus vitae in turpis elementum, viverra ultricies. Commodo sed eget at massa,
                                    integer. Porta id id nisl faucibus neque, purus. Fermentum enim, sed ut ultrices amet
                                    turpis pharetra faucibus blandit. Aenean proin at tortor tincidunt. Aenean sed ornare
                                    sit arcu mattis amet, eget. Id sed amet cras urna et malesuada.</p>
                                <hr />
                            </div>
                            <div className="job-qualification-detail">
                                <h4>Qualification</h4>
                                <div className="job-qualification-point">
                                    <ul>
                                        <li>Pellentesque vel tristique ultrices habitasse feugiat nulla</li>
                                        <li> tempor quam. Et risus commodo natoque pulvinar eu, interdum.</li>
                                        <li> Viverra tortor hac sollicitudin dictum sit. Condimentum eget et </li>
                                        <li>commodo sapien porta felis amet pellentesque</li>
                                        <li>.Erat augue enim turpis risus urna, ut egestas vivamus proin.</li>
                                    </ul>
                                    <ul>
                                        <li>Pellentesque vel tristique ultrices habitasse feugiat nulla</li>
                                        <li>tempor quam. Et risus commodo natoque pulvinar eu, interdum.</li>
                                        <li>Viverra tortor hac sollicitudin dictum sit. Condimentum eget et </li>
                                        <li>commodo sapien porta felis amet pellentesque</li>
                                        <li>Erat augue enim turpis risus urna, ut egestas vivamus proin.</li>
                                    </ul>
                                </div>
                                <hr />
                            </div>
                            <div className="additional-information-job">
                                <h4>Additional Information</h4>
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="job-add-career">
                                            <h6>Career Level</h6>
                                            <h5>Staff (non-management & non-supervisor) </h5>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="job-add-career">
                                            <h6>Education level</h6>
                                            <h5>Bachelor Degree </h5>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="job-add-career">
                                            <h6>Years of Experience</h6>
                                            <h5>1 year</h5>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="job-add-career">
                                            <h6>Job Type</h6>
                                            <h5>Full-Time</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <div className="addit-report-btn">
                                    <a href="#"><RiFlagFill /> Report</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



        <section className="ratemystation-shop-sec">
        <h4>RateMyStation's Shop</h4>
        <Container>
        <Row>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage1} alt="Don’t Make Me Use My News Voice Face Mask" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                <h6>$18.00</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage2} alt="America Needs Local News Sweatshirt" />
              <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
              <div className="ratemystation-prod-txt">
                <h3>America Needs Local News Sweatshirt</h3>
                <h6>$25.00 – $33.50</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage3} alt="Anonymous Source Onesie" />
              <div className="ratemystation-prod-txt">
                <h3>Anonymous Source Onesie</h3>
                <h6>$18.00</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className="ratemystation-shop-prod">
              <img src={ProdImage4} alt="You Are A PKG Framed Poster" />
              <div className="ratemystation-prod-txt">
                <h3>You Are A PKG Framed Poster</h3>
                <h6>$26.00 – $105.00</h6>
                <div className="ratemystation-prod-btn">
                  <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                  <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>





    </>
  )
}

export default Viewjobdetail