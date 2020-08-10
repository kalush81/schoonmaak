import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Article from '../components/article'
import Section from '../components/Section'

export default function Home() {
  return (
      <Layout>
        <Header page='home' title='Wij dragen bij aan het Milieu.'/>
        <Article tekst='wat u zoekt'/>
        <Section />
      </Layout>
  )
}
