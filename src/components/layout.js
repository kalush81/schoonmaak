import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import MyMain from "./mymain"
import Form from './form'
import "../styles/index.scss"

export default function Layout(props) {
  return (
    <>
      <Nav></Nav>
      <MyMain>{props.children}</MyMain>
      <Form />
      <Footer></Footer>
    </>
  )
}
