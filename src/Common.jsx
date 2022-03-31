import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section className="main-banner my-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="banner-text">
                                <h1 className="h1-title">{props.title}</h1>
                                <p>{props.paragraph}</p>
                                <div className="banner-btn mt-4">
                                    <NavLink
                                        className="btn sec-btn"
                                        to={props.buttonLink}>
                                        {props.buttonText}
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="banner-img">
                                <img
                                    src={props.imgSrc}
                                    alt="Banner_Image"
                                    className="w-100"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Common;
