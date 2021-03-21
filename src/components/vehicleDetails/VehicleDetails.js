
import { Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './vehicleDetails.css';

const VehicleDetails = (props) => {
    const { name, img, id } = props.vehicle;
        return (
            <Container className="card_text">
                <Row className="float-left text-center justify-content-center mr-3 mt-5 mb-5 pt-5 card_design" >
                    <Col>
                        <Link to={`/destination/${id}`}>
                            <Card className="bg-secondary " style={{ width: '15rem', height: '17rem' }} >
                                <Card.Img className="img-fluid mt-5 " variant="top" src={img} style={{ width: '200px', height: '100px' }} />
                                <Card.Body className="mt-3 ">
                                    <Card.Title className="fs-3" >{name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    };

    export default VehicleDetails;