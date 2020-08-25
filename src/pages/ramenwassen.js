import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Article from '../components/article'
import { ramenwassen} from '../texts/text';
import Seo from '../components/seo'

export default function Ramenwassen() {
    return (
        <Layout>
            <Seo title='Ramenwassen' description='description for ramenwassen' meta={['a','b']}/>
            <Header page='ramenwassen' title='Ook gespecialiseerd in ramenwassen.'/>
            {/* <Article tekst='raam pakket' textSize='uppercase'/>
            <Article tekst=" "/> */}
            <Article extras={{...ramenwassen}}/>
        </Layout>
    )
}