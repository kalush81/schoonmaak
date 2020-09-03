import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
//import { privacybeleid } from '../texts/text';
import { graphql, useStaticQuery } from "gatsby"
import disclaimerStyle from '../components/header.module.scss'

export default function Privacybeleid() {
    const data = useStaticQuery(graphql`
    query {
      allPrivacyBeleidJson {
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
                <h1 className={disclaimerStyle.figcap}>Wij gaan zorgvuldig met uw privacy om.</h1>
            </header>
            <Article extras={data.allPrivacyBeleidJson.edges}/>
        </Layout>
    )
}
