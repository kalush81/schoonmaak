import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import { privacybeleid } from '../texts/text';
import disclaimerStyle from '../components/header.module.scss'

export default function Privacybeleid() {
    return (
        <Layout>
            <header>
                <h1 className={disclaimerStyle.figcap}>Wij gaan zorgvuldig met uw privacy om.</h1>
            </header>
            <Article extras={privacybeleid.privacybeleid}/>
        </Layout>
    )
}
