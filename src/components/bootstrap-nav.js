import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import Icon from "../assets/asset3.svg"
import navStyle from "./nav.module.scss"

export default function BootstrapNav() {
  return (
    <Container style={{ padding: 0 }}>
      <Navbar
        className='justify-content-between'
        expand="lg"
        //bg="light"
        style={{ padding: 0 }}
        className={navStyle.bootstrapNavbar}
        justify-con
      >
        <Navbar.Brand href="/" style={{ maxHeight: 130 }}>
          <div className={navStyle.logo}>
            <Icon style={{ width: "300%" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Navbar.Collapse id="navbarResponsive" className="nav-column">
          <div className="ml-auto upperNav">
              <Nav as='ul'>
              <Nav.Item as="li">
                <Link to="/overons" activeClassName={navStyle.active}>
                  over ons
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/contact" activeClassName={navStyle.active}>
                  contact
                </Link>
              </Nav.Item>
              </Nav>
          </div>
          <div className="ml-auto ">
            <Nav as="ul">
              <Nav.Item as="li">
                <Link to="/particulier" activeClassName={navStyle.active}>
                  particulier
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/zakelijk" activeClassName={navStyle.active}>
                  zakelijk
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/ramenwassen" activeClassName={navStyle.active}>
                  ramenwassen
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/desinfecteren" activeClassName={navStyle.active}>
                  desinfecteren
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/offerte" activeClassName={navStyle.active}>
                  offerte
                </Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
