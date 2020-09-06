import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { basis_zakelijk, premium_zakelijk } from "../components/packets"
import Seo2 from "../components/seo2"

export default function Zakelijk(props) {
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg bij U op kantoor"
        description="Als u op zoek bent naar een betrouwbaar en eerlijk bedrijf dat zal zorgen voor een uitgebreide netheid van uw kantoor tot aan de kleinste details, dan zal u geïnteresseerd zijn in ons aanbod. Kantoorreiniging is onze specialiteit"
      />
      <Header
        page="zakelijk"
        title="Ook op kantoor leveren wij hoge kwaliteit."
        processedImage={
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            alt="schoonmaak op kantoor"
            title="Schoonmaak Loont schoonmaakbedrijf Tilburg bij U op kantoor"
          />
        }
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
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/zakelijk.jpg" }) {
      ...fluidImage
    }
  }
`
