import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class GetStart extends Component {
    render() {
        return (
            <section className="section section-lg bg-get-start" id="join">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col
                            lg={{ size: 8, offset: 2 }}
                            className="text-center"
                        >
                            <h1 className="get-started-title text-white">
                                Vamos entrar nessa rede
                            </h1>
                            <div className="section-title-border mt-4 bg-white"></div>
                            <p className="section-subtitle font-secondary text-white text-center pt-4">
                                Você não imagina o mundo que está prestes a
                                descobrir.{" "}
                            </p>
                            <Button
                                onClick={() =>
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLSdQ5n3yqE6yH3TjAN--RRoyvfyenxWQ5CTUkPFdFi5bTITb0Q/viewform?usp=sf_link",
                                        "_blank"
                                    )
                                }
                                color="dark"
                                type="submit"
                                className="btn-secondary"
                            >
                                Participar
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-pattern-effect">
                    <img
                        src="assets/images/bg-pattern-light.png"
                        alt="pattern"
                    />
                </div>
            </section>
        );
    }
}

export default GetStart;
