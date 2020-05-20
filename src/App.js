import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import './App.css';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import logo from './assets/images/Signature-Logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Stephen Renda Jr | Full Stack Developer",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: 'Persevere',
        subTitle: "Stephen Renda Jr",
        text: "Full Stack Developer",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <div className= "background">
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" style={{ color: "white" }}>
            <Navbar.Brand>
            <img src={logo} style={{width:100, marginTop: -7}} alt="no img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                subTitle={this.state.contact.subTitle}
                text={this.state.contact.text}
              />
            )}
          />
          <Footer />
        </Container>
      </Router>
      </div>
    );
  }
}

export default App;
