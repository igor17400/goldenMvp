import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

const post = async (data) => {
    const { url } = data;

    delete data.url;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    const response = await fetch(url, params);

    if (response.status < 200 && response.status >= 300) {
        const res = await response.json();

        throw new Error(res);
    }

    return response.json();
};

class GetStart extends Component {
    state = {
        error: null,
        submitted: false,
        fields: { email: "", message: "Hi, there." },
    };

    submitForm(event) {
        const formElement = event.target;
        const { email } = formElement.elements;
        // build the request payload which includes the url of the end-point we want to hit
        const payload = {
            url: "api/contact",
            email: email,
            message: "Hi, there.",
        };

        // call the post helper function which returns a promise, which we can use to update the
        // state of our component once returned
        post(payload)
            .then(() => {
                // on success, clear any errors and set submitted state to true
                this.setState({ error: null, submitted: true });
            })
            .catch((error) => {
                // on error, update error state with the error message and set submitted to false
                this.setState({ error: error.message, submitted: false });
            });
    }

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
                                Ganhar dinheiro nunca foi tão fácil.{" "}
                            </p>
                        </Col>
                        <Col>
                            <div className="text-center subscribe-form mt-5">
                                <Form
                                    ref={this.formElement}
                                    onSubmit={(event) => this.submitForm(event)}
                                >
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        required
                                    />
                                    <Button
                                        color="none"
                                        type="submit"
                                        className="btn-primary"
                                    >
                                        Me inscrever!
                                    </Button>
                                </Form>
                            </div>
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
