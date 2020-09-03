import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"

//import { disclaimer } from "../texts/text"

import { graphql, useStaticQuery } from "gatsby"

import disclaimerStyle from "../components/header.module.scss"

export default function Disclaimer() {
  //console.log("disclaimer: ", disclaimer)
  const data = useStaticQuery(graphql`
    query {
      allDisclaimerJson {
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
      <header>
        <h1 className={disclaimerStyle.figcap}>Disclaimer.</h1>
      </header>
      <Article extras={data.allDisclaimerJson.edges} />
    </Layout>
  )
}
