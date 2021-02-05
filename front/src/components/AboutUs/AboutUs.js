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
                                        Em outras palavras. Conseguimos
                                        interligar pessoas por meio de suas vivências.
                                    </p>
                                    <ul className="text-muted list-unstyled mt-4 features-item-list">
                                        <li className="">
                                            Todo mundo tem aquele estabelecimento que gosta
                                            e frequenta. 
                                        </li>
                                        <li className="">
                                            Porque não compartilhar essa dica?
                                        </li>
                                        <li className="">
                                            Porque não ganhar com isso?
                                        </li>
                                        <li className="">
                                            Indicações se convertem em conexões. 
                                        </li>
                                        <li className="">
                                            Conexões se convertem em experiências.
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="mt-auto react-player">
                                    <iframe
                                        className="frame-border player-wrapper"
                                        title="dorsin"
                                        src="https://www.youtube.com/embed/E-UrkEjU7PI?rel=0"
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
