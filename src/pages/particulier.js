import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"
import { basis, premium, renovatie } from '../components/packets'

export default function Particulier() {
  return (
    <Layout>
      <Header
        page="particulier"
        title="Ook bij U thuis maken wij met plezier schoon."
      />
      <Article tekst="particulier" />
      <Pakkets packets={basis} packetsName='basis'/>
      <Pakkets packets={premium} packetsName='premium'/>
      <Article tekst="particulier2"/>
      <Pakkets packets={renovatie} packetsName='renovatie'/>
    </Layout>
  )
}
