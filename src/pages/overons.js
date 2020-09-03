import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
//import { overons } from '../texts/text';
import { graphql, useStaticQuery } from "gatsby"
import overonsStyle from '../components/header.module.scss'

export default function Overons() {
    const data = useStaticQuery(graphql`
    query {
      allOverOnsJson {
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
                <h1 className={overonsStyle.figcap}>Over Schoonmaak Loont.</h1>
            </header>
            
            <Article style={{width: '100%'}} extras={data.allOverOnsJson.edges} />

           
        </Layout>
    )
}
