import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Social extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="contact-social footer-alt">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={4}>
                                <ul className="list-inline social mt-4">
                                    <li className="list-inline-item">
                                        <Link to="#" className="social-icon">
                                            <i className="mdi mdi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="social-icon">
                                            <i class="fab fa-tiktok"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={3} className="mt-4 text-white">
                                <p className="contact-title">
                                    <i className="pe-7s-call"></i> &nbsp;+55
                                    (61)99699-5651
                                </p>
                            </Col>
                            <Col lg={5} className="mt-4 text-white">
                                <p className="contact-title">
                                    <i className="pe-7s-mail-open"></i>&nbsp;
                                    app.golden.publicidade@gmail.com
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Social;
