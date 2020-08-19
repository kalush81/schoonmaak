import React, { useState } from "react"
import Nav from "./nav"
import Footer from "./footer"
import MyMain from "./mymain"
import Form from "./form"
import MenuToggleButton from "./menuToggleButton"
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss"
import BoostrapNav from "./bootstrap-nav"

export default function Layout(props) {
  const [param, setParam] = useState(false)
  console.log(param)

  return (
    <>
      <div className="full-width-container-nav">
        <BoostrapNav />
      </div>
      {/* <Nav isOn={param}/>
      <MenuToggleButton setVisibility={setParam} isOn={param} /> */}
      <MyMain>{props.children}</MyMain>
      {props.hasForm !== null && <Form />}
      <Footer></Footer>
    </>
  )
}
