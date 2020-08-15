import React from "react"
import { text } from "../texts/text"
import Pakket from "../components/pakkets"
import { onze_kernwaardes } from "../components/packets"

export default function Article({ children, tekst, textSize, extras = null }) {
  if (extras) {
    const { articles } = extras
    return (
      <article className="text">
        <div className="container">
          {articles.map(article => {
            return article.title !== "ONZE KERNWAARDES" ? (
              <ul key={article.title}>
                <h3>{article.title}</h3>
                {article.paragraphs.map(paragraph => {
                  return <li key={paragraph.id}>{paragraph.text}</li>
                })}
              </ul>
            ) : (
              <ul>
                <Pakket 
                  style='100%'
                  packets={onze_kernwaardes}
                  packetsName={article.title}
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
        <h3 style={{ textTransform: textSize }}>
          {tekst === "particulier2" ? "" : tekst}
        </h3>
        <p style={{ marginBottom: "0" }}>{text[tekst]}</p>
        {children}
      </div>
    </article>
  )
}
