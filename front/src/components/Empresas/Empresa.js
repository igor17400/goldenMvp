import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import EmpresaBox from "./EmpresaBox";

class Empresa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresas: [
        {
          image: "assets/images/empresa/posto_itamaraty.png",
          category: "Gasolina",
          title: "Posto Itamaraty",
          desc:
            "SQS 115 BLOCO A PAG 1 EIXO W, Brasília - DF, 70385-000",
        },
        {
          image: "assets/images/empresa/megaform.png",
          category: "Mercado Fit",
          title: "Megaform Suplementos",
          desc:
            "St. Hab. Vicente Pires - Taguatinga, Brasília - DF, 72007-750",
        },
        {
          image: "assets/images/empresa/ENETEC.png",
          category: "Empresas Juniores",
          title: "ENETEC Consultoria",
          desc:
            "St. Hab. Vicente Pires - Taguatinga, Brasília - DF, 72007-750",
        },
      ],
    };
  }

  render() {
    return (
      <section className="section bg-light pt-5" id="company">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Empresas parceiras"
            desc="Nessas empresas você ganha desconto ao usar o MyGOLDEN de outra pessoa. As taxas de desconto variam de empresa para empresa."
          />

          <Row className="mt-4">
            {/* empresa box */}
            <EmpresaBox empresas={this.state.empresas} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Empresa;
