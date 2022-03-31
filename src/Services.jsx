import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBox from "./CardBox";
import { CardData } from "./CardsData";

const Services = () => {
    return (
        <>
            <section className="services-sec my-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mb-5">
                                <h1 className="h1-title">Our Services</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {CardData.map((allData, index) => {
                            return (
                                <CardBox
                                    key={index}
                                    imgSrc={allData.imgSrc}
                                    title={allData.title}
                                    paragraph={allData.paragraph}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
