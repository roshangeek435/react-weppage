import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <p className="m-0">© 2022 Copyright</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
