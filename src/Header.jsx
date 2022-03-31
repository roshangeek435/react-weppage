import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <header className="site-header">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <NavLink to="/" className="site-logo">
                                Logo
                            </NavLink>
                        </Col>
                        <Col lg={9}>
                            {/* <nav className="header-menu">
                                <ul>
                                    <li>
                                        <a title="Home" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a title="About" href="/about">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Services" href="/services">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Contact" href="/contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav> */}

                            <nav className="header-menu">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services">
                                            Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
