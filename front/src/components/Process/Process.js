import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: "pe-7s-id",
          title: "Faça o cadastro no site ou app",
          desc: "Só é preciso fornecer cpf, e-mail e senha.",
        },
        {
          icon: "pe-7s-phone",
          title: "Compartilhe o seu MyGolden com seus amigos",
          desc: "Basta fornecer o QR code ou o código.",
        },
        {
          icon: "pe-7s-cash",
          title: "Ganhe dinheiro em troca da sua indicação",
          desc: "Toda indicação que converter para uma compra, você ganha uma comissão.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Como Funciona?"
              desc="Cadastre. Indique. Ganhe."
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right"></i>
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right"></i>
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
