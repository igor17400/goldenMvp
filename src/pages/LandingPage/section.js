import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

//text rotator
import ReactTextRotator from "react-text-rotator";

const content = [
    {
        text: "Nós somos a Golden",
        className: "classA",
        animation: "fade",
    },
    {
        text: "Através de uma rede de influenciadores",
        className: "classB",
        animation: "fade",
    },
    {
        text: "Fazemos com que pessoas e estabelecimentos consigam crescer.",
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
    <ReactTextRotator content={content} time={3000} startDelay={1000} />
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
                    {/* Render ModalSection Component for Modal */}
                    <ModalSection
                        ref="child"
                        channel="vimeo"
                        videoId="99025203"
                    />
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
