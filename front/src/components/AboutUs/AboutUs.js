import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="aboutUs">
                    <Container>
                        <Row className="vertical-content">
                            <Col lg={5}>
                                <div className="features-box">
                                    <h3>
                                        Nós somos, nada mais e nada menos, que
                                        uma empresa de conexões.
                                    </h3>
                                    <i className="logo-golden"></i>
                                    <p className="text-muted web-desc">
                                        Em outras palavras, conseguimos
                                        interligar pessoas e por consequência
                                        elevar o engajamento dos estabelecimentos.
                                    </p>
                                    <ul className="text-muted list-unstyled mt-4 features-item-list">
                                        <li className="">
                                            Pagamos os influenciadores pelas
                                            suas indicações.
                                        </li>
                                        <li className="">
                                            Os estabelecimentos percebem um aumento
                                            no seu fluxo.
                                        </li>
                                        <li className="">
                                            Rede exclusiva de indicações e bonificações.
                                        </li>
                                        <li className="">
                                            Indicação comissionada.
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="mt-auto react-player">
                                    <iframe
                                        className="frame-border player-wrapper"
                                        title="dorsin"
                                        src="https://www.youtube.com/embed/DtMuKjvhz5g?rel=0"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutUs;
