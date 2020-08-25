import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"
import { basis, premium, renovatie } from "../components/packets"

export default function Particulier() {
  return (
    <Layout>
      <Header
        page="particulier"
        title="Ook bij U thuis maken wij met plezier schoon."
        meta={["particulier wassen", "particulier schoonmaak"]}
      />
      <div className="article-text-container">
        <Article tekst="particulier" textSize="uppercase" />
      </div>
      <Pakkets packets={basis} packetsName="basis" />
      <Pakkets packets={premium} packetsName="premium" />
      <div className="article-text-container">
        <Article tekst="particulier2" />
      </div>
      <Pakkets packets={renovatie} packetsName="renovatie" />
    </Layout>
  )
}
