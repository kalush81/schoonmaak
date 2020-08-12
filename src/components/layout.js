import React, { useState } from "react"
import Nav from "./nav"
import Footer from "./footer"
import MyMain from "./mymain"
import Form from "./form"
import MenuToggleButton from "./menuToggleButton"
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss"
import BoostrapNav from './bootstrap-nav'

export default function Layout(props) {

  const [param, setParam] = useState(false)
  console.log(param)
  
  return (
    <>
      <BoostrapNav />
      {/* <Nav isOn={param}/>
      <MenuToggleButton setVisibility={setParam} isOn={param} /> */}
      <MyMain>{props.children}</MyMain>
      <Form />
      <Footer></Footer>
    </>
  )
}
