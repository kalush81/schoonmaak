import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import { disclaimer } from '../texts/text';
import disclaimerStyle from '../components/header.module.scss'

export default function Disclaimer() {
    //console.log('disclaimer object:', disclaimer)
    return (
        <Layout>
            <header>
                <h1 className={disclaimerStyle.figcap}>Disclaimer.</h1>
            </header>
            <Article extras={{...disclaimer}}/>
        </Layout>
    )
}
