import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
//import { ramenwassen } from "../texts/text"
import { graphql, useStaticQuery } from "gatsby"
import Seo2 from "../components/seo2"

export default function Ramenwassen() {
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
    }
  `)
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg Uw ramenwasser"
        description="Ramen zijn ons bezoek en moet er onberispelijk uitzien, en schone ramen zijn een determinant van zorg voor orde.
        Gewassen ramen, kozijnen en vensterbanken maken de ruimte natuurlijker licht en de werkplek maakt een betere indruk."
      />
      <Header page="ramenwassen" title="Ook gespecialiseerd in ramenwassen." />
      {/* <Article tekst='raam pakket' textSize='uppercase'/>
            <Article tekst=" "/> */}
      <Article extras={data.allRamenwassenJson.edges} />
    </Layout>
  )
}
