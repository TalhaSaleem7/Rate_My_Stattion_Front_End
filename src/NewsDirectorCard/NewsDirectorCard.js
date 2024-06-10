import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const NewsDirectorCard = ({ directors }) => {
    return (
        <>
            {directors.map((director, index) => (<div className="news-director-card">
                <Row>
                    <Col lg={8}>
                        <div className="news-director-user-card">
                            <img src={director.image} alt="img" />
                            <div className="news-director-card-txt">
                                <h5>{director.name}</h5>
                                <p>{director.designation}<span>{director.company}</span></p>
                            </div>
                        </div>                       
                    </Col>
                    <Col lg={4}>
                        <div className="news-director-detail-btn">
                            <a href="#">See Details</a>
                        </div>
                    </Col>
                </Row>
            </div>))}
        </>
    )
}

export default NewsDirectorCard