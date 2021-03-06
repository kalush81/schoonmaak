import React from "react"
import Footer from "./footer"
import MyMain from "./mymain"
import Form from "./form"
import BoostrapNav from "./bootstrap-nav"
import "../styles/index.scss"

export default function Layout(props) {

  return (
    <div style={{minHeight: '100vh'}}>
      <div className="full-width-container-nav">
        <BoostrapNav />
      </div>
      <MyMain>{props.children}</MyMain>
      {props.hasForm !== null && <Form />}
      <Footer></Footer>
    </div>
  )
}
