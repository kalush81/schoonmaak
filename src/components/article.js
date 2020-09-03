import React from "react"
import { text } from "../texts/text"
import Pakket from "../components/pakkets"
import { onze_kernwaardes } from "../components/packets"

export default function Article({ children, tekst, textSize, extras = null }) {
  if (extras) {
    const articles = extras;
    return (
      <article className="text">
        <div className="container">
          {articles.map(article => {
            return article.node.title !== "ONZE KERNWAARDES" ? (
              <ul key={article.node.id}>
                <h3>{article.node.title}</h3>
                {article.node.paragraphs.map(paragraph => {
                  return <li key={paragraph.id}>{paragraph.text}</li>
                })}
              </ul>
            ) : (
              <ul key={article.node.id}> 
                <Pakket 
                  style='100%'
                  packets={onze_kernwaardes}
                  packetsName={article.node.title}
                />
              </ul>
            )
          })}
        </div>
      </article>
    )
  }

  return (
    <article className="text">
      <div className="container">
        <h3 style={{ textTransform: textSize, display: `${tekst==='particulier2' || tekst===' ' ? 'none': 'block'}` }}>
          {tekst === "particulier2" ? "" : tekst}
        </h3>
        <p style={{ marginBottom: "0" }}>{text[tekst]}</p>
        {children}
        
      </div>
    </article>
  )
}
