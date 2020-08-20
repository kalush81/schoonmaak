import React, { useEffect, useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import Icon from "../assets/asset3.svg"
import navStyle from "./nav.module.scss"

export default function BootstrapNav() {
  const [myWidth, setWidth] = useState("1px")

  useEffect(() => {
    setWidth(window.innerWidth < 993 ? "80px" : "280px")
    window.addEventListener("resize", () => {
      window.innerWidth < 993 ? setWidth("80px") : setWidth("280px")
    })
  }, [])

  return (
    <Container style={{ padding: 0 }}>
      <Navbar
        className="justify-content-between"
        expand="xl"
        //bg="light"
        style={{ padding: 0 }}
        className={navStyle.bootstrapNavbar}
        //justify-con
      >
        <Navbar.Brand href="/">
          <div className={navStyle.logo}>
            <Icon style={{ width: myWidth }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Navbar.Collapse id="navbarResponsive" className="nav-column">
          <div className="ml-auto upperNav">
            <Nav as="ul">
            <Nav.Item as="li">
                <Link to="/fancy-form" activeClassName={navStyle.active}>
                  fancy form
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/overons" activeClassName={navStyle.active}>
                  Over ons
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link  id='contactBtnId' to="/contact" className={navStyle.contactBtn} activeClassName={navStyle.active}>
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </div>
          <div
            className="ml-auto "
            style={{ fontWeight: "bold", marginTop: '20px', fontSize: "0.9rem" }}
          >
            <Nav as="ul">
              <Nav.Item as="li">
                <Link to="/" activeClassName={navStyle.active}>
                  home
                </Link>
              </Nav.Item>
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
