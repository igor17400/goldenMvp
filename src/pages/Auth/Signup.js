import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="account-home-btn d-none d-sm-block">
                    <Link to="/" className="text-white">
                        <i className="mdi mdi-home h1"></i>
                    </Link>
                </div>

                <section className="bg-account-pages vh-100">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={5}>
                                        <Card className="account-card">
                                            <CardBody>
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold">
                                                        <Link
                                                            to="/"
                                                            className="text-dark text-uppercase account-pages-logo"
                                                        >
                                                            GOLDEN
                                                        </Link>
                                                    </h3>
                                                    <p className="text-muted">
                                                        Registrar para uma nova
                                                        conta
                                                    </p>
                                                </div>
                                                <div className="p-3">
                                                    <AvForm>
                                                        <FormGroup>
                                                            <Label htmlFor="firstname">
                                                                Primeiro Nome
                                                            </Label>
                                                            <AvField
                                                                name="firstname"
                                                                required
                                                                type="text"
                                                                className="form-control"
                                                                id="firstname"
                                                                placeholder="Primeiro Nome"
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label htmlFor="email">
                                                                E-mail
                                                            </Label>
                                                            <AvField
                                                                type="password"
                                                                name="email"
                                                                required
                                                                className="form-control"
                                                                id="email"
                                                                placeholder="E-mail"
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label htmlFor="userpassword">
                                                                Senha
                                                            </Label>
                                                            <AvField
                                                                type="password"
                                                                name="password"
                                                                required
                                                                className="form-control"
                                                                id="userpassword"
                                                                placeholder="Senha"
                                                            />
                                                        </FormGroup>

                                                        <div className="custom-control custom-checkbox">
                                                            <Input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customControlInline"
                                                            />{" "}
                                                            <Label
                                                                className="custom-control-label"
                                                                htmlFor="customControlInline"
                                                            >
                                                                Lembrar de mim
                                                            </Label>
                                                        </div>

                                                        <div className="d-grid mt-3">
                                                            <Button
                                                                type="submit"
                                                                color="none"
                                                                className="btn btn-primary"
                                                            >
                                                                Registrar
                                                            </Button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <p className="mb-0">
                                                                Ja possui uma conta?{" "}
                                                                <Link
                                                                    to="/login"
                                                                    className="text-danger"
                                                                >
                                                                    Login
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </AvForm>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Signup;
