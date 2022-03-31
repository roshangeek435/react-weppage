import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../src/images/404.svg";

const Error_page = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="my-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h1 className="h1-title mb-5">404 Page</h1>
                                <img src={image} alt="img" />
                                <div className="mt-4 btn-404">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="btn sec-btn">
                                        Go back
                                    </button>

                                    <NavLink to="/" className="btn sec-btn">
                                        Go Home
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Error_page;
