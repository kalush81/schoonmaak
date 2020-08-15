import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import { overons } from '../texts/text';
import overonsStyle from '../components/header.module.scss'

export default function Overons() {
    return (
        <Layout>
            <header>
                <h1 className={overonsStyle.figcap}>Over Schoonmaak Loont.</h1>
            </header>
            
            <Article style={{width: '100%'}} extras={overons} />

           
        </Layout>
    )
}
