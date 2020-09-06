import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Seo2 from "../components/seo2"

export default function Ramenwassen(props) {
  const data = useStaticQuery(graphql`
    query {
      allRamenwassenJson {
        edges {
          node {
            id
            title
            paragraphs {
              text
              id
            }
          }
        }
      }
      imageOne: file(relativePath: { eq: "images/ramenwassen.jpg" }) {
        ...fluidImage
      }
    }
  `)
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg Uw ramenwasser"
        description="Ramen zijn ons bezoek en moet er onberispelijk uitzien, en schone ramen zijn een determinant van zorg voor orde.
        Gewassen ramen, kozijnen en vensterbanken maken de ruimte natuurlijker licht en de werkplek maakt een betere indruk."
      />
      <Header
        page="ramenwassen"
        title="Ook gespecialiseerd in ramenwassen."
        processedImage={
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            alt="ramen wasser"
            title="Schoonmaak Loont schoonmaakbedrijf Tilburg Uw ramenwasser"
          />
        }
      />
      <Article extras={data.allRamenwassenJson.edges} />
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
