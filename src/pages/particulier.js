import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { basis, premium, renovatie } from "../components/packets"
import Seo2 from "../components/seo2"

export default function Particulier(props) {
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg ook voor thuis"
        description="De privéruimte van ons appartement en huis is een delicate sfeer, als professionals met ervaring begrijpen we heel goed dat het, naast een perfecte schoonmaak, ook belangrijk is dat mensen die deze activiteit uitvoeren zich aanpassen aan het dagelijkse ritme de harmonie van stilte in huis niet verstoren"
      />
      <Header
        page="particulier"
        title="Ook bij U thuis maken wij met plezier schoon."
        processedImage={
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            alt="schoonmaak voor thuis"
            title="Schoonmaak Loont schoonmaakbedrijf Tilburg ook voor thuis"
          />
        }
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
    imageOne: file(relativePath: { eq: "images/particulier.jpg" }) {
      ...fluidImage
    }
  }
`
