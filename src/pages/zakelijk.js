import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"
import { basis_zakelijk, premium_zakelijk } from "../components/packets"
import Seo2 from "../components/seo2"

export default function Zakelijk() {
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg bij U op kantoor"
        description="Als u op zoek bent naar een betrouwbaar en eerlijk bedrijf dat zal zorgen voor een uitgebreide netheid van uw kantoor tot aan de kleinste details, dan zal u geïnteresseerd zijn in ons aanbod. Kantoorreiniging is onze specialiteit"
      />
      <Header
        page="zakelijk"
        title="Ook op kantoor leveren wij hoge kwaliteit."
      />
      <div className="article-text-container">
        <Article tekst="zakelijk" textSize="uppercase" />
        <Article tekst="Waarom wij?" /*textSize="lowercase"*/ />
        <Article tekst="Hoe maken we schoon?" /*textSize="lowercase" */ />
        <Article tekst=" " />
      </div>
      <Pakkets packets={basis_zakelijk} packetsName="basis" />
      <Pakkets packets={premium_zakelijk} packetsName="premium" />
    </Layout>
  )
}
