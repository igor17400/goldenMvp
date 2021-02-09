// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import {
//     Container,
//     Row,
//     Col,
//     Card,
//     CardBody,
//     FormGroup,
//     Label,
//     Input,
//     Button,
//     Form,
// } from "reactstrap";

// import { AvForm, AvField } from "availity-reactstrap-validation";
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "../../aws-exports";
// import {
//     AmplifySignOut,
//     AmplifySignIn,
//     AmplifySignUp,
//     AmplifyAuthenticator,
//     withAuthenticator,
// } from "@aws-amplify/ui-react";

// // Ref - https://www.youtube.com/watch?v=JaVu-sS3ixg

// Amplify.configure(awsconfig);

// class Signup extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: "",
//             password: "",
//             phone_number: "",
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.signUp = this.signUp.bind(this);
//         this.confirmSignUp = this.confirmSignUp.bind(this);
//     }

//     signUp() {
//         const { name, password, phone_number } = this.state;
//         Auth.signUp({
//             name: name,
//             password: password,
//             attributes: {
//                 phone_number: phone_number,
//             },
//         })
//             .then(() => {
//                 console.log("Successfully signed up");
//             })
//             .catch((err) => console.log(`Error signing up: ${err}`));
//     }

//     confirmSignUp() {
//         const { name, confimationCode } = this.state;
//         Auth.confirmSignUp(name, confimationCode)
//             .then(() => {
//                 console.log("Successfully confirmed signed up");
//                 this.props.handleSignUp();
//             })
//             .catch((err) => console.log(`Error confirming sign up - ${err}`));
//     }

//     handleSubmit(e) {
//         const { verified } = this.state;

//         e.preventDefault();

//         if (verified) {
//             this.confirmSignUp();
//             this.setState({
//                 confirmationCode: "",
//                 name: "",
//             });
//         } else {
//             this.signUp();
//             this.setState({
//                 password: "",
//                 phone_number: "",
//                 verified: true,
//             });
//         }
//         e.target.reset();
//     }

//     handleChange(e) {
//         if (e.target.id === "name") {
//             this.setState({
//                 name: e.target.value,
//             });
//         } else if (e.target.id === "password") {
//             this.setState({
//                 password: e.target.value,
//             });
//         } else if (e.target.id === "phone_number") {
//             this.setState({
//                 phone_number: e.target.value,
//             });
//         } else if (e.target.id === "confirmationCode") {
//             this.setState({
//                 confirmationCode: e.target.value,
//             });
//         }
//     }

//     render() {
//         const { verified } = this.state;
//         if (verified) {
//             return (
//                 <React.Fragment>
//                     <section className="bg-account-pages vh-100">
//                         <div className="display-table">
//                             <div className="display-table-cell">
//                                 <Container>
//                                     <Row className="justify-content-center">
//                                         <Col lg={5}>
//                                             <Card className="account-card">
//                                                 <CardBody>
//                                                     <h3 className="font-weight-bold">
//                                                         <a
//                                                             href="index.html"
//                                                             className="text-dark text-uppercase account-pages-logo"
//                                                         >
//                                                             Código de
//                                                             confirmação
//                                                         </a>
//                                                     </h3>
//                                                     <div className="p-3">
//                                                         <AvForm>
//                                                             <FormGroup>
//                                                                 <Label htmlFor="text">
//                                                                     Código de
//                                                                     confirmação
//                                                                 </Label>
//                                                                 <AvField
//                                                                     type="text"
//                                                                     required
//                                                                     className="form-control"
//                                                                     id="confirmationCode"
//                                                                     onChange={
//                                                                         this
//                                                                             .handleChange
//                                                                     }
//                                                                 />
//                                                             </FormGroup>
//                                                         </AvForm>
//                                                     </div>
//                                                     <div className="d-grid mt-3">
//                                                         <Button
//                                                             color="none"
//                                                             type="submit"
//                                                             className="btn btn-primary"
//                                                         >
//                                                             Confirmar código
//                                                         </Button>
//                                                     </div>
//                                                 </CardBody>
//                                             </Card>
//                                         </Col>
//                                     </Row>
//                                 </Container>
//                             </div>
//                         </div>
//                     </section>
//                 </React.Fragment>
//             );
//         } else {
//             return (
//                 <React.Fragment>
//                     <div className="account-home-btn d-none d-sm-block">
//                         <Link to="/" className="text-white">
//                             <i className="mdi mdi-home h1"></i>
//                         </Link>
//                     </div>

//                     <section className="bg-account-pages vh-100">
//                         <div className="display-table">
//                             <div className="display-table-cell">
//                                 <Container>
//                                     <Row className="justify-content-center">
//                                         <Col lg={5}>
//                                             <Card className="account-card">
//                                                 <CardBody>
//                                                     <div className="text-center mt-3">
//                                                         <h3 className="font-weight-bold">
//                                                             <a
//                                                                 href="index.html"
//                                                                 className="text-dark text-uppercase account-pages-logo"
//                                                             >
//                                                                 GOLDEN
//                                                             </a>
//                                                         </h3>
//                                                         <p className="text-muted">
//                                                             Faça login para
//                                                             continuar
//                                                         </p>
//                                                     </div>
//                                                     <div className="p-3">
//                                                         <AvForm
//                                                             onSubmit={
//                                                                 this
//                                                                     .handleSubmit
//                                                             }
//                                                         >
//                                                             <FormGroup>
//                                                                 <Label htmlFor="name">
//                                                                     Nome
//                                                                 </Label>
//                                                                 <AvField
//                                                                     type="text"
//                                                                     name="name"
//                                                                     required
//                                                                     className="form-control"
//                                                                     id="name"
//                                                                     placeholder="nome"
//                                                                     onChange={
//                                                                         this
//                                                                             .handleChange
//                                                                     }
//                                                                 />
//                                                             </FormGroup>

//                                                             <FormGroup>
//                                                                 <Label htmlFor="phone_">
//                                                                     Telefone
//                                                                     Celular
//                                                                 </Label>
//                                                                 <AvField
//                                                                     type="tel"
//                                                                     name="phone_number"
//                                                                     required
//                                                                     className="form-control"
//                                                                     id="phone_number"
//                                                                     placeholder="+55(61)99699-5651"
//                                                                     onChange={
//                                                                         this
//                                                                             .handleChange
//                                                                     }
//                                                                 />
//                                                             </FormGroup>

//                                                             <FormGroup>
//                                                                 <Label htmlFor="userpassword">
//                                                                     Senha
//                                                                 </Label>
//                                                                 <AvField
//                                                                     type="password"
//                                                                     name="password"
//                                                                     required
//                                                                     className="form-control"
//                                                                     id="userpassword"
//                                                                     placeholder="Senha"
//                                                                     onChange={
//                                                                         this
//                                                                             .handleChange
//                                                                     }
//                                                                 />
//                                                             </FormGroup>

//                                                             <div className="custom-control custom-checkbox">
//                                                                 <Input
//                                                                     type="checkbox"
//                                                                     className="custom-control-input"
//                                                                     id="customControlInline"
//                                                                 />{" "}
//                                                                 <Label
//                                                                     className="custom-control-label"
//                                                                     htmlFor="customControlInline"
//                                                                 >
//                                                                     {" "}
//                                                                     Lembrar de
//                                                                     mim
//                                                                 </Label>
//                                                             </div>

//                                                             <div className="d-grid mt-3">
//                                                                 <Button
//                                                                     color="none"
//                                                                     type="submit"
//                                                                     className="btn btn-primary"
//                                                                 >
//                                                                     Registrar
//                                                                 </Button>
//                                                             </div>

//                                                             <div className="mt-4 mb-0 text-center">
//                                                                 <Link
//                                                                     to="password_forget"
//                                                                     className="text-dark"
//                                                                 >
//                                                                     <i className="mdi mdi-lock"></i>{" "}
//                                                                     Esqueceu a
//                                                                     sua senha?
//                                                                 </Link>
//                                                             </div>

//                                                             <div className="mt-4 mb-0 text-center">
//                                                                 <p className="mb-0">
//                                                                     Não possui
//                                                                     uma conta?{" "}
//                                                                     <Link
//                                                                         to="/registrar"
//                                                                         className="text-danger"
//                                                                     >
//                                                                         Registrar
//                                                                     </Link>
//                                                                 </p>
//                                                             </div>
//                                                         </AvForm>
//                                                     </div>
//                                                 </CardBody>
//                                             </Card>
//                                         </Col>
//                                     </Row>
//                                 </Container>
//                             </div>
//                         </div>
//                     </section>
//                 </React.Fragment>
//             );
//         }
//     }
// }

// export default Signup;
