import React from "react";
import { Col, Card } from "react-bootstrap";

const CardBox = (props) => {
    return (
        <>
            <Col lg={4}>
                <Card>
                    <Card.Img variant="top" src={props.imgSrc} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.paragraph}</Card.Text>
                        <a href="#" title="Click" className="btn sec-btn">
                            Read More
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardBox;
