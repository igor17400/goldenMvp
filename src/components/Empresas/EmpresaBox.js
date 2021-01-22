import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class EmpresaBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.empresas.map((empresa, key) => (
          <Col key={key} lg={4}>
            <div className="empresa-box mt-4 hover-effect">
              <img src={empresa.image} className="img-fluid" alt="empresa" />
              <div>
                <h5 className="mt-4 text-muted">{empresa.category}</h5>
                <h4 className="mt-3">
                  <Link to="#" className="empresa-title">
                    {" "}
                    {empresa.title}{" "}
                  </Link>
                </h4>
                <p className="text-muted">{empresa.desc}</p>
                <div className="mt-3">
                  <Link to="#" className="read-btn">
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default EmpresaBox;
