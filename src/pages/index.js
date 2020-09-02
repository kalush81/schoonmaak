import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Section from "../components/section"
import headerStyle from "../components/header.module.scss"
import Seo2 from "../components/seo2"

export default function Home() {
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg innovatief en milieubewust" 
        //description="U zoekt een bedrijf dat mileubewust is op zijn dienstverlening. Dat net als u bewust is op het realiseren van uw doelstellingen. Dat klantgericht werkt aan goed schoon op een betere manier"
      />
      <Header page="home" title="Wij dragen bij aan het Milieu." />
      <figcaption className={headerStyle.figcap}>
        Wij dragen bij aan het Milieu.
      </figcaption>
      <div className="article-text-container">
        <Article tekst="wat u zoekt" textSize="uppercase" />
      </div>
      <Section />
    </Layout>
  )
}
