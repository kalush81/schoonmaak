import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"
import { basis, premium, renovatie } from "../components/packets"
import Seo2 from "../components/seo2"

export default function Particulier() {
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg ook voor thuis"
        description="De privéruimte van ons appartement en huis is een delicate sfeer, als professionals met ervaring begrijpen we heel goed dat het, naast een perfecte schoonmaak, ook belangrijk is dat mensen die deze activiteit uitvoeren zich aanpassen aan het dagelijkse ritme de harmonie van stilte in huis niet verstoren"
        meta={["particulier wassen", "particulier schoonmaak"]}
      />
      <Header
        page="particulier"
        title="Ook bij U thuis maken wij met plezier schoon."
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
