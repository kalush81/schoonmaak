import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Article from '../components/article'
import Pakkets from "../components/pakkets"
import { basis_zakelijk, premium_zakelijk } from '../components/packets'

export default function Zakelijk() {
    return (
        <Layout>
            <Header page='zakelijk' title='Ook op kantoor leveren wij hoge kwaliteit.'/>
            <Article tekst='zakelijk' textSize='uppercase'/>
            <Article tekst="Waarom wij?" textSize='lowercase'/>
            <Article tekst="Hoe maken we schoon?" textSize='lowercase'/>
            <Article tekst=" "/>
            <Pakkets packets={basis_zakelijk} packetsName='basis'/>
            <Pakkets packets={premium_zakelijk} packetsName='premium'/>
            
        </Layout>
    )
}
