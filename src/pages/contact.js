import React from 'react'
import Layout from '../components/layout'
import contactStyle from '../components/header.module.scss'
import { contact } from '../texts/text'
import Article from '../components/article'
import Forms from '../components/forms'


export default function Contact() {
    return (
        <Layout hasForm={null}>
            <header>
                <h1 className={contactStyle.figcap}>Contact met Schoonmaak Loont.</h1>
            </header>
            <Article extras={contact}/>
            <Forms />
        </Layout>
    )
}
