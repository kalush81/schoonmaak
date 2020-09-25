import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function _404(props) {
  return (
    <div>
      <h1>page Not found</h1>
      <p>Keep looking for :-)</p>
      <div style={{maxHeight:'60vh'}}>

      <Img
        fluid={props.data.imageOne.childImageSharp.fluid}
        alt="corona virus"
        title="Schoonmaak Loont schoonmaakbedrijf in Tilburg Coronavirusvrij met Ozon"
      />
      </div>
    </div>
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
    imageOne: file(relativePath: { eq: "images/desinfecteren.jpg" }) {
      ...fluidImage
    }
  }
`
