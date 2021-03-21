import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Form, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Maps from '../GoogleMap/Maps';
import header from '../../images/Bg.png';
const Destination = () => {
    return (
        <Container style={{ backgroundImage: ` url(${header})` }} className="header img-fluid">
            <Row>
                <Col sm={4}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control type="text" placeholder="Enter area" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control type="text" placeholder="Enter area" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button  variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col sm={8}>
                   <Maps></Maps>
                </Col>

            </Row>
        </Container>
    );
};

export default Destination;