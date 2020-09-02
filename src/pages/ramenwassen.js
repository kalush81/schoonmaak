import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import { ramenwassen } from "../texts/text"
import Seo2 from "../components/seo2"

export default function Ramenwassen() {
  return (
    <Layout>
      <Seo2
        title="schoonmaak ramenwassen schon glazen wasser"
        description="Ramen zijn ons bezoek en moet er onberispelijk uitzien, en schone ramen zijn een determinant van zorg voor orde.
Gewassen ramen, kozijnen en vensterbanken maken de ruimte natuurlijker licht en de werkplek maakt een betere indruk."
        //meta={["ramen wassen", "glazen wassen", "ramen wasser"]}
        // rel='canonical'
      />
      <Header page="ramenwassen" title="Ook gespecialiseerd in ramenwassen." />
      {/* <Article tekst='raam pakket' textSize='uppercase'/>
            <Article tekst=" "/> */}
      <Article extras={{ ...ramenwassen }} />
    </Layout>
  )
}
