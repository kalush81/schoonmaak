import React from 'react'
import Layout from '../components/layout'
import contactStyle from '../components/header.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import Article from '../components/article'
import MyFancyForm from '../components/my-fancy-form'


export default function Contact() {
    const data = useStaticQuery(graphql`
    query {
      allContactJson {
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
        <Layout hasForm={null}>
            <header>
                <h1 className={contactStyle.figcap}>Contact met Schoonmaak Loont.</h1>
            </header>
            <Article extras={data.allContactJson.edges}/>
            <MyFancyForm />
        </Layout>
    )
}
