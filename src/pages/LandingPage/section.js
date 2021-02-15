import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

//text rotator
import ReactTextRotator from "react-text-rotator";

import arrow from "./arrow-down-white.png";

const content = [
    {
        text: "Nós somos a Golden.",
        className: "classA",
        animation: "fade",
    },
    {
        text: "Através de uma rede de influenciadores",
        className: "classB",
        animation: "fade",
    },
    {
        text:
            "Impactamos pessoas e criamos conexões.",
        className: "classC",
        animation: "fade",
    },
    {
        text: "Vamos nessa?",
        className: "classD",
        animation: "fade",
    },
];

const TextRotator = () => (
    <ReactTextRotator content={content} time={2150} startDelay={350} />
);

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.callModal.bind(this);
    }

    callModal = () => {
        this.child.openModal();
    };

    render() {
        return (
            <React.Fragment>
                <section
                    className="section section-lg vh-100"
                    id="home"
                    style={{
                        backgroundImage: `url(assets/images/golden_baby.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <Container>
                                <Row>
                                    <Col
                                        lg={{ size: 8, offset: 2 }}
                                        className="text-white text-center"
                                    >
                                        <h1 className="home-title text-rotate">
                                            <TextRotator />
                                        </h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <img
                                        src={arrow}
                                        alt="continue"
                                        style={{
                                            height: "2rem"
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
