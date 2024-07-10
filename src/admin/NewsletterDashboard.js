import React from 'react'
import NewsletterDashboardTable from './NewsletterDashboardTable'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCirclePlus } from 'react-icons/fa6'
import EmailSubscriberBox from '../EmailSubscriberBox/EmailSubscriberBox'
import WritterSubscriberBox from '../WritterSubscriberBox/WritterSubscriberBox'

const NewsletterDashboard = () => {
    return (
        <>
    <section className="ah1">
                    <Row>
                        <Col lg={12}>
                            <div className="dashboard_pages_head">
                                <h3>Newsletter</h3> 
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="addnewprod_head">
                                <a href="#">
                                    <FaCirclePlus /> New Newsletter
                                </a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="pagesdash_filter_flex newsletter_filter_flex">
                                <h5>Sort:</h5>
                                <select name="" id="">
                                    <option value="">Newest</option>
                                    <option value="">Newest</option>
                                    <option value="">Newest</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <NewsletterDashboardTable />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="dashboard_subscriber_head">
                                <h2>Subscriber</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <EmailSubscriberBox/>
                        </Col>
                        <Col lg={6}>
                            <WritterSubscriberBox/>
                        </Col>
                    </Row>
           
            </section>
        </>
    )
}

export default NewsletterDashboard