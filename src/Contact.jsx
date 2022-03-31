import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Contact = () => {
    const [val, setVal] = useState({
        fname: "",
        email: "",
        massage: "",
    });

    const inputData = (event) => {
        const { value, name } = event.target;

        setVal((oldData) => {
            return { ...oldData, [name]: value };
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        alert(`Your Name Is ${val.fname}
Your Email Is ${val.email}
Your Massage Is ${val.massage}`);
    };

    return (
        <>
            <section className="services-sec my-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mb-5">
                                <h1 className="h1-title">Contact</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} className="m-auto">
                            <Form onSubmit={submitForm}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        name="fname"
                                        onChange={inputData}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        required
                                        name="email"
                                        onChange={inputData}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        name="massage"
                                        onChange={inputData}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn sec-btn">
                                        Submit
                                    </button>
                                </div>
                            </Form>

                            {/* <p>{val.fname}</p>
                            <p>{val.email}</p>
                            <p>{val.massage}</p> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;
