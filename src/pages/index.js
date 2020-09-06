import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Section from "../components/section"
import headerStyle from "../components/header.module.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Seo2 from "../components/seo2"

export default function Home(props) {
  return (
    <Layout>
      <Seo2 title="Schoonmaak Loont is het schoonmaakbedrijf gevestigd in Tilburg. Innovatief en milieubewuste" />
      <Header
        page="home"
        title="Wij dragen bij aan het Milieu."
        processedImage={[
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />,
          <Img fluid={props.data.imageTwo.childImageSharp.fluid}/>,
          <Img fluid={props.data.imageThree.childImageSharp.fluid}/>
        ]}
      />
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
    imageOne: file(relativePath: { eq: "images/slider-pics/Milieu_Vriendelijk_Schoonmaak.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "images/slider-pics/Corona_Virus_Schoonmaak.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "images/slider-pics/Duurzaamheid_Schoonmaak.jpg" }) {
      ...fluidImage
    }
  }
`
