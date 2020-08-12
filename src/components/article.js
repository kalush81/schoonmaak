import React from "react"
import { text } from "../texts/text"

export default function Article({children, tekst, textSize, extras=null}) {

  if (extras) {
    const articles = extras
    return (
      <article className="text">
        <div className="container">
        {articles.map(article => {
          return (
            <ul>
              <h3>{article.title}</h3>
              {article.paragraphs.map(paragraph => {
                return (
                  <li>{paragraph}</li>
                )
              })}
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
        <h3 style={{textTransform: textSize}}>{tekst === 'particulier2' ? '' : tekst}</h3>
        <p style={{marginBottom: '0'}}>{text[tekst]}</p>
        {children}
      </div>
    </article>
  )
}
