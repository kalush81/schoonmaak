import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import { disclaimer } from '../texts/text';

export default function Disclaimer() {
    //console.log('disclaimer object:', disclaimer)
    return (
        <Layout>
            <header>
                <h1>Disclaimer.</h1>
            </header>
            <Article extras={disclaimer}/>
        </Layout>
    )
}
