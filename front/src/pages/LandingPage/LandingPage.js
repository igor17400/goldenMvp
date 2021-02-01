import React, { Component } from 'react';

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import AboutUs from "../../components/AboutUs/AboutUs";
import Process from "../../components/Process/Process";
import GetStart from "../../components/GetStart/GetStart"
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Início" },
                { id: 2 , idnm : "aboutUs", navheading: "Sobre Nós" },
                { id: 3 , idnm : "join", navheading: "Faça Parte" },
            ],
            navClass : ""
        };
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} />

                {/* section */}
                <Section/>

                {/* about us */}
                <AboutUs/>

                {/* get started */}
                <GetStart/>

                {/* process */}
                <Process/>

                {/* social */}
                <Social />

                {/* footer */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default LandingPage;