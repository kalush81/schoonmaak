import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Section from "../components/section"
import headerStyle from '../components/header.module.scss'

export default function Home() {
  return (
    <Layout>
      <Header page="home" title="Wij dragen bij aan het Milieu." />
      <figcaption className={headerStyle.figcap}>Wij dragen bij aan het Milieu.</figcaption>
      <div className='article-text-container'>
        <Article tekst="wat u zoekt" textSize="uppercase" />
      </div>
      <Section />
    </Layout>
  )
}
